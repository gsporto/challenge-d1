import { IFilter, IJourney } from 'dtos/Dashboard';
import api from 'services';

export const getFilter = async () => api.get<IFilter[]>('/filter');

export const getJourney = async (id: number) => {
  return api.get<IJourney[]>(`/journey/${id || ''}`);
};
