import { create } from 'zustand';
import { Option } from './types';

export interface State {
  styles: Option[];
  setStyles: (newStyles: Option[]) => void;

  tones: Option[];
  setTones: (newTones: Option[]) => void;

  celebrations: Option[];
  setCelebrations: (newCelebrations: Option[]) => void;

  content: string;
  setContent: (newContent: string) => void;

  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const useStore = create<State>()((set) => ({
  styles: [],
  setStyles: (newStyles) => set(() => ({ styles: newStyles })),

  tones: [],
  setTones: (newTones) => set(() => ({ styles: newTones })),

  celebrations: [],
  setCelebrations: (newCelebrations) =>
    set(() => ({ styles: newCelebrations })),

  content: '',
  setContent: (newContent) => set(() => ({ content: newContent })),

  isLoading: false,
  setIsLoading: (value) => set(() => ({ isLoading: value })),
}));
