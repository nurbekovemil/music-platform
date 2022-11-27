import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import playerSlice from "./slices/player";
import trackSlice from "./slices/track";
export const store = configureStore({
  reducer: {
    player: playerSlice,
    track: trackSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
