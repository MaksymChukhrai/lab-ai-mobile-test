import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface UploadFileState {
  fileName: string | null;
  fileType: string | null;
  extractedText: string | null;
  uploadId: string | null;
}

const initialState: UploadFileState = {
  fileName: null,
  fileType: null,
  extractedText: null,
  uploadId: null,
};

export const uploadFileSlice = createSlice({
  name: "uploadFile",
  initialState,
  reducers: {
    setUploadedFile: (
      state,
      action: PayloadAction<{
        fileName: string;
        fileType: string;
        extractedText: string;
        uploadId?: string;
      }>,
    ) => {
      state.fileName = action.payload.fileName;
      state.fileType = action.payload.fileType;
      state.extractedText = action.payload.extractedText;
      if (action.payload.uploadId) {
        state.uploadId = action.payload.uploadId;
      }
    },
    clearUploadedFile: (state) => {
      state.fileName = null;
      state.fileType = null;
      state.extractedText = null;
      state.uploadId = null;
    },
  },
});

export const { setUploadedFile, clearUploadedFile } = uploadFileSlice.actions;

export const selectUploadedFile = (state: RootState) => state.uploadFile;

export const selectHasUploadedFile = (state: RootState) =>
  !!state.uploadFile.fileName && !!state.uploadFile.extractedText;

export default uploadFileSlice.reducer;
