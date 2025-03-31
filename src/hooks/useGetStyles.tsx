import { useEffect } from 'react';

import { api } from '../axios';
import { useStore } from '../store';
import { Option } from '../types';

export function useGetStyles() {
  const setStyles = useStore((state) => state.setStyles);
  const styles = useStore((state) => state.styles);

  useEffect(() => {
    const fetchStyles = async () => {
      const result = await api.get<Option[]>('/style/findAll');

      setStyles(result.data);
    };

    fetchStyles();
  }, [setStyles]);

  return styles;
}
