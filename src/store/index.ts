import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import optionReducer from "./slices/optionSlice";
import bloodMarkersReducer from "./slices/bloodMarkersSlice";
import uploadFileReducer from "./slices/uploadFileSlice";
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    option: optionReducer,
    bloodMarkers: bloodMarkersReducer,
    uploadFile: uploadFileReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
