import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export interface BloodMarkerWithMeta {
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
        isNew: false,
      }));
    },
    updateMarkerName: (
      state,
      action: PayloadAction<{ index: number; name: string }>,
    ) => {
      const { index, name } = action.payload;
      if (state.markers[index]) {
        state.markers[index].name = name;
      }
    },
    updateMarkerValue: (
      state,
      action: PayloadAction<{ index: number; value: string }>,
    ) => {
      const { index, value } = action.payload;
      if (state.markers[index]) {
        state.markers[index].value = value;
      }
    },
    addMarker: (state) => {
      const newMarker: BloodMarkerWithMeta = {
        name: "",
        value: "",
        unit: "",
        normalRange: "",
        isNormal: true,
        isNew: true,
      };
      state.markers.push(newMarker);
    },
    removeMarker: (state, action: PayloadAction<number>) => {
      state.markers.splice(action.payload, 1);
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
