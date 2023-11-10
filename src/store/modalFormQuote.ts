import { create } from "zustand";

type IsOpenQuote = {
  isOpen: boolean;
  changeIsOpen: (state: boolean) => void;
};

const useModalFormQuote = create<IsOpenQuote>((set) => ({
  isOpen: false,
  changeIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}));

export { useModalFormQuote };
