// src/services/postService.ts
import api from './api';

export const getAllPosts = async () => {
  const response = await api.get('/posts');
  return response.data;
};

export const createPost = async (formData: FormData) => {
  const response = await api.post('/posts', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const likePost = async (postId: string) => {
  const response = await api.post(`/posts/${postId}/like`);
  return response.data;
};

export const unlikePost = async (postId: string) => {
  const response = await api.delete(`/posts/${postId}/like`);
  return response.data;
};

export const addComment = async (postId: string, content: string) => {
  const response = await api.post(`/posts/${postId}/comments`, { content });
  return response.data;
};
