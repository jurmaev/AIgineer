import { useEffect } from 'react';

import { api } from '../axios';
import { useStore } from '../store';
import { Option } from '../types';

export function useGetServices() {
  const setServices = useStore((state) => state.setServices);
  const services = useStore((state) => state.services);

  useEffect(() => {
    const fetchServices = async () => {
      const result = await api.get<Option[]>('/service/findAll');

      setServices(result.data);
    };

    fetchServices();
  }, [setServices]);

  return services;
}
