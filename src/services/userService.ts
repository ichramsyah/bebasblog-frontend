// src/services/userService.ts
import api from './api';

export const getUserPublicProfile = async (username: string) => {
  const response = await api.get(`/users/${username}`);
  return response.data;
};

export const getPostsByUsername = async (username: string) => {
  const response = await api.get(`/users/${username}/posts`);
  return response.data;
};
