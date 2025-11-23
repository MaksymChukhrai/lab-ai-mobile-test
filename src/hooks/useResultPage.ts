import { useEffect, useState } from "react";
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

export const useResultPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const analysisResult = useAppSelector(selectAnalysisResult);

  const [pdfPageHeight, setPdfPageHeight] = useState<number>(842);

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

  const handlePrintReport = () => {
    window.print();
  };

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
  };
};
