// store/useUserStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { PLAT_NAME } from "@constants/index"
interface User {
  id: string;
  name: string;
  token: string;
}

interface UserStore {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useGlobalStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      clearUser: () => set({ user: null }),
    }),
    {
      name: `${PLAT_NAME}_user-storage`, // localStorage key
      partialize: (state) => ({ user: state.user }), // 只持久化 user
    }
  )
);
