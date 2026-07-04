import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  adminUser: null | { email: string; role: string };
  setAuth: (user: { email: string; role: string }) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  adminUser: null,

  setAuth: (user) => set({
    isAuthenticated: true,
    adminUser: user,
  }),

  logout: () => set({
    isAuthenticated: false,
    adminUser: null,
  }),
}));