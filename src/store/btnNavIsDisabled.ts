import { create } from 'zustand';

type isDisabledBtnNav = {
    isDisabled: boolean,
    changeIsDisabled: (state: boolean) => void;
}

const useIsDisabledBtnNav = create<isDisabledBtnNav>((set) => ({
  isDisabled: false,
  changeIsDisabled: () => set((state) => ({ isDisabled: !state.isDisabled })),
}));

export { useIsDisabledBtnNav };