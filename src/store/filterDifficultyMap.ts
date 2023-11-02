import { create } from 'zustand';

type Difficulty = "reset" | "beginner" | "intermediaire" | "expert";

type FilterDifficultyStore = {
  difficultyFilter: Difficulty;
  changeDifficulty: (newDifficulty: Difficulty) => void;
  resetDifficulty: () => void;
};

const useFilterDifficulty = create<FilterDifficultyStore>((set) => ({
  difficultyFilter: "reset",
  changeDifficulty: (newDifficulty: Difficulty) => set({ difficultyFilter: newDifficulty }),
  resetDifficulty: () => set({ difficultyFilter: "reset" }),
}));

export { useFilterDifficulty };