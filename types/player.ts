import { ITrack } from "./track";

export interface PlayerSlice {
  track: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}
