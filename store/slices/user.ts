import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { IUser, UserSlice } from "../../types/user";
import { checkAuth, login } from "../actions/auth";

const initialState: UserSlice = {
  user: {} as IUser,
  isAuth: false,
  isAuthLoading: false,
  errors: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<IUser>) => {
      state.user = payload;
    },
    setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isAuthLoading = true;
    }),
      builder.addCase(login.fulfilled, (state, { payload }) => {
        localStorage.setItem("token", payload.tokens.accessToken);
        state.isAuth = true;
        state.user = payload.user;
        state.isAuthLoading = false;
      }),
      builder.addCase(login.rejected, (state) => {
        state.isAuthLoading = false;
        state.errors = "error in auth";
      }),
      builder.addCase(checkAuth.fulfilled, (state, { payload }) => {
        localStorage.setItem("token", payload.tokens.accessToken);
        state.isAuth = true;
        state.user = payload.user;
      }),
      builder.addCase(checkAuth.rejected, (state) => {
        state.errors = "error in auth";
      });
  },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
