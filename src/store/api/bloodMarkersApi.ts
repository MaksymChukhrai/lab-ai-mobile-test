import { apiSlice } from "./apiSlice";

export interface BloodMarker {
  name: string;
  value: string;
  unit: string;
  normalRange: string;
  isNormal: boolean;
}

export interface BloodMarkersResponse {
  age: number;
  gender: string;
  markers: BloodMarker[];
}

export interface AnalysisRequest {
  age: number;
  gender: string;
  markers: Array<{
    name: string;
    value: string;
    unit: string;
  }>;
  comment: string;
  selectedOptions: string[];
}

export interface AnalysisResponse {
  success: boolean;
  analysisId: string;
  message: string;
}

export const bloodMarkersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBloodMarkers: builder.query<BloodMarkersResponse, void>({
      query: () => "/medical/analysis/blood-markers",
    }),
    generateAnalysis: builder.mutation<AnalysisResponse, AnalysisRequest>({
      query: (data) => ({
        url: "/medical/analysis/results",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetBloodMarkersQuery, useGenerateAnalysisMutation } =
  bloodMarkersApi;
