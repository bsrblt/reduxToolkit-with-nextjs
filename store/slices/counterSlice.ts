import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  toggle: boolean;
}

const initialState: CounterState = {
  value: 0,
  toggle: false,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    toggleCounter: (state) => {
      state.toggle = !state.toggle;
    },
  },
});

export const { increment, decrement, reset, toggleCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
