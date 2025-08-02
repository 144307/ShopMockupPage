import { createSlice } from "@reduxjs/toolkit";
import { CartItem, CartState } from "../../types";

const initialState = {
  items: [],
} as CartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const index = state.items.findIndex(
        (e: CartItem) => e.id === action.payload.id
      );
      if (index != -1) {
        state.items[index].amount++;
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, amount: 1 }],
        };
      }
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(
        (e: CartItem) => e.id === action.payload.id
      );
      if (state.items[index].amount > 1) {
        state.items[index].amount--;
      } else {
        state.items.splice(index, 1);
      }
    },
    deleteFromCart: (state, action) => {
      const index = state.items.findIndex(
        (e: CartItem) => e.id === action.payload.id
      );
      if (index != -1) {
        state.items.splice(index, 1);
      } else {
        throw new Error("Item is not in cart");
      }
    },
    clear: (state) => {
      console.log("cart emptied");
      return { ...state, items: [] };
    },
  },
});

export const { increment, decrement, deleteFromCart, clear } =
  cartSlice.actions;

export default cartSlice.reducer;
