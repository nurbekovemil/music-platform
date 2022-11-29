import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PlayerSlice } from "../../types/player";
import { ITrack } from "../../types/track";

const initialState: PlayerSlice = {
  track: null,
  volume: 30,
  duration: 0,
  currentTime: 0,
  pause: true,
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    playTrack: (state) => {
      state.pause = false;
    },
    pauseTrack: (state) => {
      state.pause = true;
    },
    setTrack: (state, { payload }: PayloadAction<ITrack>) => {
      state.track = payload;
    },
    setDuration: (state, { payload }: PayloadAction<number>) => {
      state.duration = payload;
    },
    setCurrentTime: (state, { payload }: PayloadAction<number>) => {
      state.currentTime = payload;
    },
    setVolume: (state, { payload }: PayloadAction<number>) => {
      state.volume = payload;
    },
  },
});
export const {
  playTrack,
  pauseTrack,
  setTrack,
  setDuration,
  setCurrentTime,
  setVolume,
} = playerSlice.actions;
export default playerSlice.reducer;
