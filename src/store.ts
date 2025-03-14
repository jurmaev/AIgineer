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
  setStyles: (newStyles) => set((state) => ({ ...state, styles: newStyles })),

  tones: [],
  setTones: (newTones) => set((state) => ({ ...state, tones: newTones })),

  celebrations: [],
  setCelebrations: (newCelebrations) =>
    set((state) => ({ ...state, celebrations: newCelebrations })),

  content: '',
  setContent: (newContent) =>
    set((state) => ({ ...state, content: newContent })),

  isLoading: false,
  setIsLoading: (value) => set((state) => ({ ...state, isLoading: value })),
}));
