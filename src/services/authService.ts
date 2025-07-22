import api from './api';
import type { IRegisterPayload, ILoginPayload } from '../types';

export const registerUser = async (userData: IRegisterPayload) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (userData: ILoginPayload) => {
  const response = await api.post('/auth/login', userData);
  return response.data;
};
