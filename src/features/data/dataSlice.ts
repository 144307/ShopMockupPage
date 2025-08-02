import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../assets/MOCK_DATA.json";
import { DataState } from "../../types";

const initialState: DataState = { data: mockData, dataToDisplay: mockData };
// const initialState = JSON.parse(mockData)

const dataReducer = createSlice({
  name: "data",
  initialState,
  reducers: {
    filterData: (state, action) => {
      console.log(action);
      return state;
    },
  },
});

export default dataReducer.reducer;
