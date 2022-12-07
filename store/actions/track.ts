import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { ITrack } from "../../types/track";

export const getTrackList = createAsyncThunk("track/getTrackList", async () => {
  const response = await api.get<ITrack[]>("http://localhost:3001/track");
  return response.data;
});

export const createTrack = createAsyncThunk(
  "track/createTrack",
  async (data: FormData) => {
    const response = await api.post("http://localhost:3001/track", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);
