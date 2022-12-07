export interface IUser {
  email: string;
  id: string;
  isActivated: boolean;
}

export interface UserSlice {
  user: IUser;
  isAuth: boolean;
  isAuthLoading: boolean;
  errors: string;
}

export interface IUserSignIn {
  email: string;
  password: string;
}
