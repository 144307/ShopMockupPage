import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOverlayOpened: false,
  isCartOpened: false,
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
      state.isCartOpened = false;
    },
    setOverlayClosed: (state) => {
      state.isOverlayOpened = false;
    },
    setCartOpen: (state) => {
      state.isCartOpened = true;
    },
    setCartClose: (state) => {
      state.isCartOpened = false;
    },
  },
});

export const {
  test,
  setOverlayOpen,
  setOverlayClosed,
  setCartOpen,
  setCartClose,
} = uiSlice.actions;

export default uiSlice.reducer;
