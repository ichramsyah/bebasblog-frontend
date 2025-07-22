// src/services/postService.ts
import api from './api';

export const getAllPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};
