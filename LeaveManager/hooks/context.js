import { create } from "zustand";

export const useLocalStorage = create((set) => ({
  eventsDatas: [],
  setEventData: (val) => set((state) => ({ eventsDatas: val })),
}));
