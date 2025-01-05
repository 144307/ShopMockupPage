import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.ts";
import settingsReducer from "./settingsSlice.ts";
import dataReducer from "./features/data/dataSlice.ts";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    settings: settingsReducer,
    productData: dataReducer,
  },
});
