import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  level: number;
  xp: number;
  badges: string[];
}

interface AppState {
  user: User | null;
  language: 'ar' | 'en';
  theme: 'dark' | 'light';
  setUser: (user: User) => void;
  setLanguage: (lang: 'ar' | 'en') => void;
  setTheme: (theme: 'dark' | 'light') => void;
  addXP: (amount: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  user: null,
  language: 'ar',
  theme: 'dark',
  setUser: (user) => set({ user }),
  setLanguage: (lang) => set({ language: lang }),
  setTheme: (theme) => set({ theme }),
  addXP: (amount) => {
    set((state) => ({
      user: state.user
        ? { ...state.user, xp: state.user.xp + amount }
        : null,
    }));
  },
}));
