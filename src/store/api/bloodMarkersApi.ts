import { apiSlice } from "./apiSlice";

export interface BloodMarker {
  id: string;
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

export interface MarkerResult {
  name: string;
  value: string;
  unit: string;
  normalRange: string;
  recommendation: string;
  indicator: string;
}

export interface Recommendations {
  name: string;
  value: string;
  items: Array<{
    name: string;
    recommendations: string;
  }>;
}

export interface FinalAssessment {
  overallHealthStatus: string;
  recommendationSummary: string;
}

export interface AnalysisResponse {
  age: number;
  gender: string;
  markers: MarkerResult[];
  userCommentResponse: string;
  recommendations: Recommendations[];
  finalAssessment: FinalAssessment;
}

export const bloodMarkersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBloodMarkers: builder.query<BloodMarkersResponse, void>({
      query: () => "/api/medical/analysis/blood-markers",
    }),
    generateAnalysis: builder.mutation<AnalysisResponse, AnalysisRequest>({
      query: (data) => ({
        url: "/api/medical/analysis/results",
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetBloodMarkersQuery,
  useGenerateAnalysisMutation,
  useLazyGetBloodMarkersQuery,
} = bloodMarkersApi;
