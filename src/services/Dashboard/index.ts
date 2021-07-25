import { IFilter, IJourney } from 'dtos/Dashboard';
import api from 'services';

const getFilter = async () => api.get<IFilter[]>('/filter');

const getJourney = async (id: string) => api.get<IJourney[]>(`/journey/${id}`);

export { getFilter, getJourney };
