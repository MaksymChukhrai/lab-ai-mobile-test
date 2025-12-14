import { configureStore } from "@reduxjs/toolkit";
import { clearUserState } from "@/store/actions/clearUserState";
import { apiSlice } from "@/store/api/apiSlice";
import uploadFileReducer, {
  setUploadedFile,
} from "@/store/slices/uploadFileSlice";
import analysisResultReducer, {
  setAnalysisResult,
} from "@/store/slices/analysisResultSlice";
import bloodMarkersReducer, {
  setBloodMarkersData,
} from "@/store/slices/bloodMarkersSlice";
import optionReducer, { toggleOption } from "@/store/slices/optionSlice";

type TestStore = ReturnType<typeof createTestStore>;
type TestRootState = ReturnType<TestStore["getState"]>;

const createTestStore = () => {
  return configureStore({
    reducer: {
      uploadFile: uploadFileReducer,
      analysisResult: analysisResultReducer,
      bloodMarkers: bloodMarkersReducer,
      option: optionReducer,
      [apiSlice.reducerPath]: apiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware),
  });
};

describe("clearUserState", () => {
  let store: TestStore;

  beforeEach(() => {
    store = createTestStore();
  });

  it("should clear uploadFile state", () => {
    store.dispatch(
      setUploadedFile({
        fileName: "test.pdf",
        fileType: "application/pdf",
        extractedText: "Patient medical data...",
        uploadId: "test-upload-123",
      }),
    );

    const clearActions = clearUserState();
    clearActions.forEach((action) => store.dispatch(action));

    const state: TestRootState = store.getState();
    expect(state.uploadFile.fileName).toBeNull();
    expect(state.uploadFile.fileType).toBeNull();
    expect(state.uploadFile.extractedText).toBeNull();
    expect(state.uploadFile.uploadId).toBeNull();
  });

  it("should clear analysisResult state", () => {
    store.dispatch(
      setAnalysisResult({
        response: {
          summary: "Test summary",
          recommendations: [],
          markers: [],
        } as never,
        input: {
          age: 30,
          gender: "male",
          markers: [],
          uploadId: "123",
        } as never,
      }),
    );

    const clearActions = clearUserState();
    clearActions.forEach((action) => store.dispatch(action));

    const state: TestRootState = store.getState();
    expect(state.analysisResult.result).toBeNull();
    expect(state.analysisResult.generatedWith).toBeNull();
  });

  it("should clear bloodMarkers state", () => {
    store.dispatch(
      setBloodMarkersData({
        age: 30,
        gender: "male",
        markers: [
          {
            id: "1",
            name: "Hemoglobin",
            value: "15",
            unit: "g/dL",
            normalRange: "13-17",
            isNormal: true,
          },
        ],
      }),
    );

    const clearActions = clearUserState();
    clearActions.forEach((action) => store.dispatch(action));

    const state: TestRootState = store.getState();
    expect(state.bloodMarkers.age).toBe(0);
    expect(state.bloodMarkers.gender).toBe("");
    expect(state.bloodMarkers.markers).toEqual([]);
    expect(state.bloodMarkers.comment).toBe("");
  });

  it("should clear option state", () => {
    store.dispatch(toggleOption("option1"));
    store.dispatch(toggleOption("option2"));

    const clearActions = clearUserState();
    clearActions.forEach((action) => store.dispatch(action));

    const state: TestRootState = store.getState();
    expect(state.option.selectedOptions).toEqual([]);
  });

  it("should clear all user data in one call", () => {
    store.dispatch(
      setUploadedFile({
        fileName: "test.pdf",
        fileType: "application/pdf",
        extractedText: "Data",
        uploadId: "123",
      }),
    );

    store.dispatch(
      setAnalysisResult({
        response: {
          summary: "Test",
          recommendations: [],
          markers: [],
        } as never,
        input: {
          age: 30,
          gender: "male",
          markers: [],
          uploadId: "123",
        } as never,
      }),
    );

    store.dispatch(
      setBloodMarkersData({
        age: 30,
        gender: "male",
        markers: [],
      }),
    );

    store.dispatch(toggleOption("option1"));

    const clearActions = clearUserState();
    clearActions.forEach((action) => store.dispatch(action));

    const state: TestRootState = store.getState();
    expect(state.uploadFile.fileName).toBeNull();
    expect(state.analysisResult.result).toBeNull();
    expect(state.bloodMarkers.age).toBe(0);
    expect(state.option.selectedOptions).toEqual([]);
  });
});
