import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TracksSlice } from "../../types/track";
import axios from "axios";
import { RootState } from "..";

const initialState: TracksSlice = {
  tracks: [],
  pending: false,
  error: false,
};

export const trackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTrackList.pending, (state) => {
      state.pending = true;
    }),
      builder.addCase(getTrackList.fulfilled, (state, { payload }) => {
        state.tracks = payload;
        state.pending = false;
      }),
      builder.addCase(getTrackList.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const getTrackList = createAsyncThunk("track/getTrackList", async () => {
  const response = await axios.get("http://localhost:3001/track");
  return response.data;
});

export const selectTrack = (state: RootState) => state.track;

export default trackSlice.reducer;
