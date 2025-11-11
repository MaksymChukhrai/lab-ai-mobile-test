import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../index";

interface OptionState {
  selectedOptions: string[];
}

const initialState: OptionState = {
  selectedOptions: [],
};

export const optionSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    toggleOption: (state, action: PayloadAction<string>) => {
      const optionId = action.payload;
      const exists = state.selectedOptions.includes(optionId);

      if (exists) {
        state.selectedOptions = state.selectedOptions.filter(
          (id) => id !== optionId,
        );
      } else {
        state.selectedOptions.push(optionId);
      }
    },
    clearSelectedOptions: (state) => {
      state.selectedOptions = [];
    },
  },
});

export const { toggleOption, clearSelectedOptions } = optionSlice.actions;

export const selectSelectedOptions = (state: RootState) =>
  state.option.selectedOptions;

export default optionSlice.reducer;
