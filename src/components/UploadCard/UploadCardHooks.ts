import { useState, useRef, useCallback, useEffect } from "react";
import { t } from "i18next";
import Tesseract from "tesseract.js";
import { useNavigate } from "react-router-dom";
import {
  FILE_TYPE_PDF,
  OCR_LANGUAGES,
  OCR_STATUS_RECOGNIZING,
} from "constants/fileUpload";
import { useSendParsedDataMutation } from "store/api/uploadFileApi";
import { useLazyGetBloodMarkersQuery } from "store/api/bloodMarkersApi";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setUploadedFile,
  clearUploadedFile,
  selectUploadedFile,
  selectHasUploadedFile,
} from "store/slices/uploadFileSlice";
import { clearBloodMarkersData } from "store/slices/bloodMarkersSlice";
import { clearSelectedOptions } from "store/slices/optionSlice";
import { PATHS } from "constants/navigation";
import { validateFile } from "components/UploadCard/utils/fileUtils";
import { extractTextFromPDF } from "components/UploadCard/utils/pdfUtils";

export const useUploadCard = (uploadEnabled: boolean = true) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const uploadedFile = useAppSelector(selectUploadedFile);
  const hasUploadedFile = useAppSelector(selectHasUploadedFile);

  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [ocrText, setOcrText] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [ocrProgress, setOcrProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showLoader, setShowLoader] = useState(false);

  const [sendParsedData] = useSendParsedDataMutation();
  const [getBloodMarkers] = useLazyGetBloodMarkersQuery();

  useEffect(() => {
    if (
      hasUploadedFile &&
      uploadedFile.fileName &&
      uploadedFile.extractedText
    ) {
      setOcrText(uploadedFile.extractedText);
      setShowLoader(true);
      setOcrProgress(100);
      setIsProcessing(false);
    }
  }, [hasUploadedFile, uploadedFile]);

  const selectedFileName = uploadedFile.fileName || selectedFile?.name || null;

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
    if (uploadedFile.uploadId && hasUploadedFile) {
      navigate(PATHS.OPTION);

      return;
    }

    const fileName = uploadedFile.fileName || selectedFile?.name;
    const fileType = uploadedFile.fileType || selectedFile?.type;
    const textToUpload = ocrText;

    if (!fileName || !fileType || !textToUpload) {
      setErrorMessage(t("error.noFile"));

      return;
    }

    try {
      setIsUploading(true);
      setErrorMessage(null);

      const uploadResponse = await sendParsedData({
        fileName,
        fileType,
        extractedText: textToUpload,
      }).unwrap();

      const { analysis, id } = uploadResponse;

      if (!analysis.isMedical) {
        setErrorMessage(t("error.noMedicalData"));
        setIsUploading(false);
        setShowLoader(false);

        return;
      }

      if (!analysis.hasBloodMarkers) {
        setErrorMessage(t("error.noBloodMarkers"));
        setIsUploading(false);
        setShowLoader(false);

        return;
      }

      dispatch(
        setUploadedFile({
          fileName,
          fileType,
          extractedText: textToUpload,
          uploadId: id,
        }),
      );

      navigate(PATHS.OPTION);
      await getBloodMarkers().unwrap();
    } catch (err) {
      const message =
        err instanceof Error ? err.message : t("error.unknownError");
      setErrorMessage(message);
    } finally {
      setIsUploading(false);
    }
  }, [
    selectedFile,
    ocrText,
    uploadedFile,
    sendParsedData,
    getBloodMarkers,
    navigate,
    dispatch,
    hasUploadedFile,
  ]);

  const handleBack = () => {
    navigate(PATHS.DEFAULT);
  };

  const handleDeleteFile = useCallback(() => {
    setSelectedFile(null);
    setOcrText(null);
    setErrorMessage(null);
    setOcrProgress(0);
    setShowLoader(false);

    dispatch(clearUploadedFile());
    dispatch(clearBloodMarkersData());
    dispatch(clearSelectedOptions());
  }, [dispatch]);

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
    isFileSelected: !!selectedFile || hasUploadedFile,
    errorMessage,
    showLoader,
  };
};
