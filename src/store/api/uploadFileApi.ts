import { apiSlice } from "./apiSlice";

export interface ParsedDataPayload {
  fileName: string;
  fileType: string;
  extractedText: string;
}

export interface UploadAnalysis {
  isMedical: boolean;
  hasBloodMarkers: boolean;
}

export interface ParsedDataResponse {
  message: string;
  saved: boolean;
  id: string;
  analysis: UploadAnalysis;
}

export const uploadFileApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    sendParsedData: builder.mutation<ParsedDataResponse, ParsedDataPayload>({
      query: (data) => {
        return {
          url: "/upload/parsed-data",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useSendParsedDataMutation } = uploadFileApi;
