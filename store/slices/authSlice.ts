import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type StateType = {
  email: string;
  password: string;
  isAuth: boolean;
};
const initialState: StateType = {
  email: "",
  password: "",
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{ email: string; password: string }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isAuth = true;
    },
    logout: (state) => {
      state.email = "";
      state.password = "";
      state.isAuth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
