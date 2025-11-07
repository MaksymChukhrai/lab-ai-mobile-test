import { useState, useRef, useCallback } from "react";
import { t } from "i18next";
import Tesseract from "tesseract.js";
import { useNavigate } from "react-router-dom";
import {
  FILE_TYPE_PDF,
  OCR_LANGUAGES,
  OCR_STATUS_RECOGNIZING,
} from "@/constants/fileUpload";
import { useSendParsedDataMutation } from "@/store/api/uploadFileApi";
import { PATHS } from "@/constants/navigation";
import { validateFile } from "./utils/fileUtils";
import { extractTextFromPDF } from "./utils/pdfUtils";

export const useUploadCard = (uploadEnabled: boolean = true) => {
  const navigate = useNavigate();
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [ocrText, setOcrText] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState(false);

  const selectedFileName = selectedFile?.name ?? null;
  const [sendParsedData] = useSendParsedDataMutation();

  const handleBrowseClick = useCallback(() => {
    if (!uploadEnabled) return;
    fileInputRef.current?.click();
  }, [uploadEnabled]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const extractTextFromFile = useCallback(async (file: File) => {
    try {
      setIsProcessing(true);
      setShowLoader(true);
      setOcrProgress(0);

      let text = "";

      if (file.type === FILE_TYPE_PDF) {
        text = await extractTextFromPDF(file, (progressPercent) =>
          setOcrProgress(progressPercent),
        );
      } else {
        const result = await Tesseract.recognize(file, OCR_LANGUAGES, {
          logger: (m) => {
            if (m.status === OCR_STATUS_RECOGNIZING && m.progress) {
              setOcrProgress(Math.round(m.progress * 100));
            }
          },
        });
        text = result.data.text;
      }

      setOcrText(text);
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : t("error.unknownError");
      setErrorMessage(message);
      setShowLoader(false);
    } finally {
      setIsProcessing(false);
      setOcrProgress(100);
    }
  }, []);

  const handleFile = useCallback(
    async (file: File) => {
      const error = validateFile(file);

      if (error) {
        setErrorMessage(error);
        setSelectedFile(null);
        setOcrText(null);
        setShowLoader(false);
        return;
      }

      setErrorMessage(null);
      setSelectedFile(file);
      await extractTextFromFile(file);
    },

    [extractTextFromFile],
  );

  const handleUpload = useCallback(() => {
    if (!uploadEnabled) return;

    fileInputRef.current?.click();
  }, [uploadEnabled]);

  const handleContinue = useCallback(async () => {
    if (!selectedFile || !ocrText) {
      setErrorMessage(t("error.noFile"));
      return;
    }

    try {
      setIsUploading(true);
      setErrorMessage(null);

      await sendParsedData({
        fileName: selectedFile.name,
        fileType: selectedFile.type,
        extractedText: ocrText,
      }).unwrap();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t("error.uploadFailed");
      setErrorMessage(message);
    } finally {
      setIsUploading(false);
    }
  }, [selectedFile, ocrText, sendParsedData]);

  const handleBack = () => {
    navigate(PATHS.DEFAULT);
  };

  const handleDeleteFile = useCallback(() => {
    setSelectedFile(null);

    setOcrText(null);

    setErrorMessage(null);

    setOcrProgress(0);

    setShowLoader(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (!file) return;
      handleFile(file);
    },
    [handleFile],
  );
  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      handleFile(file);
      e.target.value = "";
    },
    [handleFile],
  );

  return {
    fileInputRef,
    handleFile,
    handleFileChange,
    handleDrop,
    handleDragOver,
    handleDragLeave,
    handleBrowseClick,
    handleUpload,
    handleContinue,
    handleBack,
    handleDeleteFile,
    isDragging,
    selectedFileName,
    isUploading,
    ocrText,
    isProcessing,
    ocrProgress,
    isFileSelected: !!selectedFile,
    errorMessage,
    showLoader,
  };
};
