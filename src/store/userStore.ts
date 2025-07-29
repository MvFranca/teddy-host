import { create } from "zustand";
import { persist } from "zustand/middleware";

type UserStore = {
  name: string;
  setName: (name: string) => void;
  reset: () => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      name: "",
      setName: (name) => set({ name }),
      reset: () => set({ name: "" }),
    }),
    {
      name: "user-storage",
    }
  )
);
