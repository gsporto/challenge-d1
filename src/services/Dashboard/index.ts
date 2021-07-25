import { IFilter, IJourney } from 'dtos/Dashboard';
import api from 'services';

const getFilter = async () => api.get<IJourney[]>('/filter');

const getJourney = async (id: string) => api.get<IFilter[]>(`/journey/${id}'`);

export { getFilter, getJourney };
