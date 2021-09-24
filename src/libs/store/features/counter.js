import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  step: 1,
  maximum: 10,
  minimum: -10,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += state.step;
    },
    decrement: (state) => {
      state.value -= state.step;
    },
    incrementByAmount: (state, action) => {
      state.step = action.payload;
    },

    maxValue: (state, action) => {
      state.maximum= action.payload;
    },

    minValue: (state, action) => {
      state.minimum= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, maxValue, minValue} = counterSlice.actions;

export default counterSlice.reducer;
