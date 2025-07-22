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
  profile_picture_url?: string;
  createdAt?: string;
}

export interface IPost {
  _id: string;
  user: {
    _id: string;
    username: string;
    profile_picture_url: string;
  };
  images: string[];
  description: string;
  likes: string[];
  comments: string[];
  createdAt: string;
}
