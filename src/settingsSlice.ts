import { createSlice } from "@reduxjs/toolkit";
import { SettingsState } from "./types";

const initialState = {
  darkMode: false,
} as SettingsState;

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setDarkMode: (state) => {
      state.darkMode = true;
    },
    setLightMode: (state) => {
      state.darkMode = false;
    },
  },
});

export const { setDarkMode, setLightMode } = settingsSlice.actions;

export default settingsSlice.reducer;
