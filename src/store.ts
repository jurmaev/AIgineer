import { create } from 'zustand';
import { Option } from './types';

interface State {
  styles: Option[];
  setStyles: (newStyles: Option[]) => void;
}

export const useStore = create<State>()((set) => ({
  styles: [],
  setStyles: (newStyles) => set(() => ({ styles: newStyles })),
}));
