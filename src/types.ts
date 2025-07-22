export interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IUserProfile {
  _id: string;
  username: string;
  email: string;
  bio?: string;
  image?: string;
}
