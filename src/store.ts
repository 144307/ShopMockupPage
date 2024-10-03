import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.ts";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
