import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export interface BloodMarkerWithMeta {
  id: string;
  name: string;
  value: string;
  unit: string;
  normalRange: string;
  isNormal: boolean;
  isNew?: boolean;
}

interface BloodMarkersState {
  age: number;
  gender: string;
  markers: BloodMarkerWithMeta[];
  comment: string;
}

const initialState: BloodMarkersState = {
  age: 0,
  gender: "",
  markers: [],
  comment: "",
};

export const bloodMarkersSlice = createSlice({
  name: "bloodMarkers",
  initialState,
  reducers: {
    setBloodMarkersData: (
      state,
      action: PayloadAction<{
        age: number;
        gender: string;
        markers: BloodMarkerWithMeta[];
      }>,
    ) => {
      state.age = action.payload.age;
      state.gender = action.payload.gender;
      state.markers = action.payload.markers.map((marker) => ({
        ...marker,
        id: crypto.randomUUID(),
        isNew: false,
      }));
    },
    updateMarkerName: (
      state,
      action: PayloadAction<{ id: string; name: string }>,
    ) => {
      // const { index, name } = action.payload;
      const { id, name } = action.payload;
      const marker = state.markers.find((m) => m.id === id);
      if (marker) {
        marker.name = name;
      }
    },
    updateMarkerValue: (
      state,
      action: PayloadAction<{ id: string; value: string }>,
    ) => {
      const { id, value } = action.payload;
      const marker = state.markers.find((m) => m.id === id);
      if (marker) {
        marker.value = value;
      }
    },
    addMarker: (state) => {
      const newMarker: BloodMarkerWithMeta = {
        id: crypto.randomUUID(),
        name: "",
        value: "",
        unit: "",
        normalRange: "",
        isNormal: true,
        isNew: true,
      };
      state.markers.push(newMarker);
    },
    removeMarker: (state, action: PayloadAction<string>) => {
      state.markers = state.markers.filter(
        (marker) => marker.id !== action.payload,
      );
    },
    setComment: (state, action: PayloadAction<string>) => {
      state.comment = action.payload;
    },
    updateAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    updateGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    clearBloodMarkersData: (state) => {
      state.age = 0;
      state.gender = "";
      state.markers = [];
      state.comment = "";
    },
  },
});

export const {
  setBloodMarkersData,
  updateMarkerName,
  updateMarkerValue,
  addMarker,
  removeMarker,
  setComment,
  updateAge,
  updateGender,
  clearBloodMarkersData,
} = bloodMarkersSlice.actions;

export const selectBloodMarkers = (state: RootState) =>
  state.bloodMarkers.markers;
export const selectAge = (state: RootState) => state.bloodMarkers.age;
export const selectGender = (state: RootState) => state.bloodMarkers.gender;
export const selectComment = (state: RootState) => state.bloodMarkers.comment;

export default bloodMarkersSlice.reducer;
