import { create } from 'zustand';

interface UIState {
  isDarkMode: boolean;
  isMobileMenuOpen: boolean;
  isPrayerModalOpen: boolean;
  isNotificationOpen: boolean;
  isMusicPlaying: boolean;
  toggleDarkMode: () => void;
  setMobileMenu: (open: boolean) => void;
  setPrayerModal: (open: boolean) => void;
  setNotification: (open: boolean) => void;
  toggleMusic: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  isDarkMode: true,
  isMobileMenuOpen: false,
  isPrayerModalOpen: false,
  isNotificationOpen: false,
  isMusicPlaying: false,

  toggleDarkMode: () => set((state) => {
    const next = !state.isDarkMode;
    document.documentElement.classList.toggle('dark', next);
    return { isDarkMode: next };
  }),

  setMobileMenu: (open) => set({ isMobileMenuOpen: open }),
  setPrayerModal: (open) => set({ isPrayerModalOpen: open }),
  setNotification: (open) => set({ isNotificationOpen: open }),
  toggleMusic: () => set((state) => ({ isMusicPlaying: !state.isMusicPlaying })),
}));