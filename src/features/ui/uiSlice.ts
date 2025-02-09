import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOverlayOpened: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    test: () => {
      console.log("test slice");
    },
    setOverlayOpen: (state) => {
      state.isOverlayOpened = true;
    },
    setOverlayClosed: (state) => {
      state.isOverlayOpened = false;
    },
  },
});

export const { test, setOverlayOpen, setOverlayClosed } = uiSlice.actions;

export default uiSlice.reducer;
