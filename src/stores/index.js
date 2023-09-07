import { create } from "zustand";

const useSelectedInteraction = create((set) => ({
  curInteraction: {},
  storeSelectedInteraction: (interaction) =>
    set(() => ({ curInteraction: interaction })),
}));

export default useSelectedInteraction;
