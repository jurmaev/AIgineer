import { create } from 'zustand';
import { Option } from './types';

export interface State {
  styles: Option[];
  setStyles: (newStyles: Option[]) => void;

  tones: Option[];
  setTones: (newTones: Option[]) => void;

  celebrations: Option[];
  setCelebrations: (newCelebrations: Option[]) => void;
}

export const useStore = create<State>()((set) => ({
  styles: [],
  setStyles: (newStyles) => set(() => ({ styles: newStyles })),

  tones: [],
  setTones: (newTones) => set(() => ({ styles: newTones })),

  celebrations: [],
  setCelebrations: (newCelebrations) =>
    set(() => ({ styles: newCelebrations })),
}));
