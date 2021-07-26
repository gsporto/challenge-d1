import { useEffect, useState } from 'react';
import { BadgeCircular } from 'components/BadgeCircular';
import { IFilter } from 'dtos/Dashboard';
import { getFilter } from 'services/Dashboard';
import { useToasts } from 'react-toast-notifications';
import { Container, ItemFilter } from './styles';
import { DashboardStatus } from '../DashboardStatus';

interface DashboardFilterProps {
  selectFilter: number;
  setSelectFilter: (id: number) => void;
}
export const DashboardFilter = ({
  selectFilter,
  setSelectFilter,
}: DashboardFilterProps) => {
  const { addToast } = useToasts();
  const [filters, setFilters] = useState<IFilter[]>([]);

  useEffect(() => {
    const async = async () => {
      try {
        const response = await getFilter();
        setFilters(response.data);
      } catch (error) {
        addToast('Erro ao carregar filtros, tente novamente mais tarde!', {
          appearance: 'error',
        });
      }
    };
    async();
  }, [addToast]);

  return (
    <Container data-testid="dashboard-filter-container">
      {filters?.map(({ id, quantity }) => (
        <ItemFilter
          key={id}
          type="button"
          onClick={() => {
            setSelectFilter(id);
          }}
          selected={selectFilter === id}
        >
          <DashboardStatus id={id} />
          <BadgeCircular size={22}>{quantity}</BadgeCircular>
        </ItemFilter>
      ))}
    </Container>
  );
};
