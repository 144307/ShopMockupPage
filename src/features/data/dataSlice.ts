import { createSlice } from "@reduxjs/toolkit";
import mockData from "../../assets/MOCK_DATA.json";
import { dataState } from "../../types";

const initialState: dataState = { data: mockData, dataToDisplay: mockData };

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

// reducer
function filterReducer(
  state = initialState,
  action: { type: string; payload: string }
) {
  if (action.type === "data/filter") {
    return state;
  }
}

// action
const filterData = (filterCondition: string) => {
  return {
    type: "data/filter",
    payload: filterCondition,
  };
};

export default dataReducer.reducer;
