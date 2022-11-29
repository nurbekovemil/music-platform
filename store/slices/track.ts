import { createSlice } from "@reduxjs/toolkit";
import { TracksSlice } from "../../types/track";
import { RootState } from "..";
import { createTrack, getTrackList } from "../actions/track";

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
    builder.addCase(createTrack.pending, (state) => {
      state.pending = true;
    }),
      builder.addCase(createTrack.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.pending = false;
      }),
      builder.addCase(createTrack.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectTrack = (state: RootState) => state.track;

export default trackSlice.reducer;
