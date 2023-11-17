import { create } from "zustand";

type IsOpenStore = {
  isOpen: boolean;
  changeIsOpen: (state: boolean) => void;
};

const useNavIsOpen = create<IsOpenStore>((set) => ({
  isOpen: false,
  changeIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export { useNavIsOpen };