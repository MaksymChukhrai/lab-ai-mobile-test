import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  clearAnalysisResult,
  selectAnalysisResult,
} from "store/slices/analysisResultSlice";
import { clearUploadedFile } from "store/slices/uploadFileSlice";
import { clearBloodMarkersData } from "store/slices/bloodMarkersSlice";
import { clearSelectedOptions } from "store/slices/optionSlice";
import { calculateDynamicPdfHeight } from "utils/pdfUtils";
import { STEP_PATHS } from "constants/steps";
import { pdf, type DocumentProps } from "@react-pdf/renderer";

export const useResultPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const analysisResult = useAppSelector(selectAnalysisResult);

  const [pdfPageHeight, setPdfPageHeight] = useState<number>(842);
  const [isPrinting, setIsPrinting] = useState<boolean>(false);

  useEffect(() => {
    const updateHeight = () => {
      const height = calculateDynamicPdfHeight("result-content");
      setPdfPageHeight(height);
    };

    const timer = setTimeout(updateHeight, 500);

    window.addEventListener("resize", updateHeight);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateHeight);
    };
  }, [analysisResult]);

  const handlePrintReport = useCallback(
    async (pdfDocument: React.ReactElement<DocumentProps>) => {
      try {
        setIsPrinting(true);

        const blob = await pdf(pdfDocument).toBlob();
        const url = URL.createObjectURL(blob);
        const iframe = document.createElement("iframe");
        iframe.style.position = "fixed";
        iframe.style.right = "0";
        iframe.style.bottom = "0";
        iframe.style.width = "0";
        iframe.style.height = "0";
        iframe.style.border = "none";

        document.body.appendChild(iframe);

        iframe.onload = () => {
          try {
            setTimeout(() => {
              if (iframe.contentWindow) {
                iframe.contentWindow.focus();
                iframe.contentWindow.print();
              }

              setIsPrinting(false);
            }, 500);
          } catch (error) {
            console.error("Print error:", error);
            setIsPrinting(false);
          }
        };

        iframe.src = url;

        const handleAfterPrint = () => {
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }

            URL.revokeObjectURL(url);
          }, 100);

          window.removeEventListener("focus", handleAfterPrint);
        };

        setTimeout(() => {
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
            URL.revokeObjectURL(url);
          }
        }, 60000);

        window.addEventListener("focus", handleAfterPrint);
      } catch (error) {
        console.error("Failed to generate PDF for printing:", error);
        setIsPrinting(false);
      }
    },
    [],
  );

  const handleStartNewAnalysis = () => {
    dispatch(clearUploadedFile());
    dispatch(clearBloodMarkersData());
    dispatch(clearSelectedOptions());
    dispatch(clearAnalysisResult());
    navigate(STEP_PATHS.upload);
  };

  const handleBack = (): void => {
    navigate(STEP_PATHS.review);
  };

  return {
    analysisResult,
    handlePrintReport,
    handleStartNewAnalysis,
    handleBack,
    pdfPageHeight,
    isPrinting,
  };
};
