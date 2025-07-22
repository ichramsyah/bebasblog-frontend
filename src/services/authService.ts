import api from './api';
import type { IRegisterPayload } from '../types';

export const registerUser = async (userData: IRegisterPayload) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};
