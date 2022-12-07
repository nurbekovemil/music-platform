import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import playerSlice from "./slices/player";
import trackSlice from "./slices/track";
import userSlice from "./slices/user";
export const store = configureStore({
  reducer: {
    player: playerSlice,
    track: trackSlice,
    user: userSlice,
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
