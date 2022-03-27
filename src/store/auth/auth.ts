import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  auth: boolean;
}

const initialState: AuthState = {
  auth: true,
};

export const authSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    login: (state) => {
      state.auth = true;
    },
    logout: (state) => {
      state.auth = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice;
