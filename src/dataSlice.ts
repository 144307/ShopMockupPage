import { createSlice } from "@reduxjs/toolkit";
import data from "./assets/MOCK_DATA.json";

interface dataState {
  id: number;
  product: string;
  price: number;
  description: string;
}

const initialState = data;

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export default dataSlice.reducer;
