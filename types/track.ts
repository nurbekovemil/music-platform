export interface IComment {
  id: string;
  username: string;
  text: string;
}

export interface ITrack {
  _id: string;
  name: string;
  artist: string;
  text: string;
  listens: number;
  picture: string;
  audio: string;
  comments: IComment[];
}

export interface TracksSlice {
  tracks: ITrack[];
  pending: boolean;
  error: boolean;
}

export type ICreateTrack = {
  name: string;
  artist: string;
  text: string;
  audio: any;
  picture: any;
};
