import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUserSignIn } from "../../types/user";
import api, { API_URL } from "../api";
import axios from "axios";
export const login = createAsyncThunk(
  "user/login",
  async (payload: IUserSignIn) => {
    const response = await api.post("/auth/login", payload);
    return response.data;
  }
);

export const register = createAsyncThunk("user/register", async () => {
  const response = await api.post("/auth/login");
  return response.data;
});

export const checkAuth = createAsyncThunk("user/checkAuth", async () => {
  const response = await axios.get(`${API_URL}/auth/refresh`, {
    withCredentials: true,
  });
  return response.data;
});
