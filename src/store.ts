import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./components/Cart/cartSlice.ts";
import settingsReducer from "./settingsSlice.ts";
import dataReducer from "./features/data/dataSlice.ts";
import uiReducer from "./features/ui/uiSlice.ts";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    settings: settingsReducer,
    productData: dataReducer,
    ui: uiReducer,
  },
});
