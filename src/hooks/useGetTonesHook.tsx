import { useEffect } from 'react';
import { api } from '../axios';
import { useStore } from '../store';
import { Option } from '../types';

export function useGetTonesHook() {
  const setTones = useStore((state) => state.setTones);
  const tones = useStore((state) => state.tones);

  useEffect(() => {
    const fetchTones = async () => {
      const result = await api.get<Option[]>('/tone/findAll');

      setTones(result.data);
    };

    fetchTones();
  }, [setTones]);

  return tones;
}
