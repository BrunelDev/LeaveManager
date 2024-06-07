import { create } from "zustand";
import { deleteManyEvent } from "../lib/functions";

export const useLocalStorage = create((set) => ({
  eventsDatas: [],
  setEventData: (val) => {
    set((state) => ({ eventsDatas: val }));
  },
  notifsDatas: [],
  setNotifsDatas: (val) => {
    set((state) => ({ notifsDatas: val }));
  },
}));
export const useEventSelection = create((set) => ({
  inSelection: false,
  selectionList: [],
  setSelectionList: (value) => set(() => ({ selectionList: value })),
  deleteSelection: async (selectionedList, setEventData) => {
    await deleteManyEvent(selectionedList, setEventData);

    set({ selectionList: [] });
  },
  setInSelection: (val) => set((state) => ({ inSelection: val })),
}));

export const useNotification = create((set) => ({
  channels: [],
  expoPushToken: "",
  notification: undefined,
  notificaListener: undefined,
  responseListener: undefined,
  setExpoPushToken: (val) => set((state) => ({ expoPushToken: val })),
  setChannels: (val) => set((state) => ({ channels: val })),
  setNotification: (val) => set((state) => ({ notification: val })),
}));
