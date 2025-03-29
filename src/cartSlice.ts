import { createSlice } from "@reduxjs/toolkit";
import { cartState } from "./types";

const initialState = {
  items: [
    {
      product: {
        id: 1,
        name: "Product 1",
        price: "100",
        imageURL: "placeholder",
      },
      amount: 2,
    },
    {
      product: {
        id: 2,
        name: "Product 2",
        price: "200",
        imageURL: "placeholder",
      },
      amount: 1,
    },
  ],
} as cartState;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action) => {
      const index = state.items.findIndex(
        (e) => e.product.id === action.payload.id
      );
      if (index != -1) {
        state.items[index].amount++;
      } else {
        // state.items.push({ product: action.payload, amount: 1 });
        return {
          ...state,
          items: [...state.items, { product: action.payload, amount: 1 }],
        };
        // state.items = { product: action.payload, amount: 1 };
      }
    },
    decrement: (state, action) => {
      const index = state.items.findIndex(
        (e) => e.product.id === action.payload.id
      );
      if (state.items[index].amount > 1) {
        state.items[index].amount--;
      } else {
        state.items.splice(index, 1);
      }
    },
    deleteFromCart: (state, action) => {
      const index = state.items.findIndex(
        (e) => e.product.id === action.payload.id
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
