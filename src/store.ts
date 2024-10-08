import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.ts";
import settingsReducer from "./settingsSlice.ts";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    settings: settingsReducer,
  },
});
