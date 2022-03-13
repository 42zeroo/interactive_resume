import { createSlice } from "@reduxjs/toolkit";
import { slide_up, slide_right } from "./transitionWays";

const initialState = {
  way: slide_up(200),
  timeout: 500,
  sideContentWay: slide_right(500),
  sideContentTimeout: 500
};

export const transitionSlice = createSlice({
  name: "transition",
  initialState,
  reducers: {
    setTimeout: (state, action) => {
      state.timeout = action.payload;
    },
    setWay: (state, action) => {
      state.way = action.payload;
    },
    setSwapUp: (state) => {
      state.way = slide_up(state.timeout);
    }
  }
});

export const { setTimeout, setWay, setSwapUp } = transitionSlice.actions;

export default transitionSlice.reducer;
