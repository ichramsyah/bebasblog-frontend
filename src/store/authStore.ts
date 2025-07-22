// src/store/authStore.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { IUserProfile } from '../types';

interface AuthState {
  token: string | null;
  user: IUserProfile | null;
  isLoggedIn: boolean;
  setAuth: (token: string, user: IUserProfile) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      isLoggedIn: false,
      setAuth: (token, user) => set({ token, user, isLoggedIn: true }),
      logout: () => set({ token: null, user: null, isLoggedIn: false }),
    }),
    {
      name: 'auth-storage',
    }
  )
);
