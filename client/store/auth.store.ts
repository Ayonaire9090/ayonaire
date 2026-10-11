import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { UserProfile } from "@/lib/api/types";

interface AuthState {
  token: string | null;
  refreshToken: string | null;
  user: UserProfile | null;
  setAuth: (token: string, user: UserProfile, refreshToken?: string | null) => void;
  setUser: (user: UserProfile) => void;
  clearAuth: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      refreshToken: null,
      user: null,
      setAuth: (token, user, refreshToken) =>
        set((state) => ({
          token,
          user,
          refreshToken: refreshToken !== undefined ? refreshToken : state.refreshToken,
        })),
      setUser: (user) => set({ user }),
      clearAuth: () => set({ token: null, user: null, refreshToken: null }),
    }),
    {
      name: "auth-storage", // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
