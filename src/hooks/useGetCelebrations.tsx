import { useEffect } from 'react';
import { api } from '../axios';
import { useStore } from '../store';
import { Option } from '../types';

export function useGetCelebrations() {
  const setCelebrations = useStore((state) => state.setCelebrations);
  const celebrations = useStore((state) => state.celebrations);

  useEffect(() => {
    const fetchCelebrations = async () => {
      const result = await api.get<Option[]>('/celebration/findAll');

      setCelebrations(result.data);
    };

    fetchCelebrations();
  }, [setCelebrations]);

  return celebrations;
}
