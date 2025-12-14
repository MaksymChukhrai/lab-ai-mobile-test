import { apiSlice } from "../api/apiSlice";
import { clearUploadedFile } from "../slices/uploadFileSlice";
import { clearAnalysisResult } from "../slices/analysisResultSlice";
import { clearBloodMarkersData } from "../slices/bloodMarkersSlice";
import { clearSelectedOptions } from "../slices/optionSlice";

export const clearUserState = () => {
  return [
    apiSlice.util.resetApiState(),
    clearUploadedFile(),
    clearAnalysisResult(),
    clearBloodMarkersData(),
    clearSelectedOptions(),
  ];
};
