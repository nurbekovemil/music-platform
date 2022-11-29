import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ITrack } from "../../types/track";

export const getTrackList = createAsyncThunk("track/getTrackList", async () => {
  const response = await axios.get<ITrack[]>("http://localhost:3001/track");
  return response.data;
});

export const createTrack = createAsyncThunk(
  "track/createTrack",
  async (data: FormData) => {
    const response = await axios.post("http://localhost:3001/track", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);
