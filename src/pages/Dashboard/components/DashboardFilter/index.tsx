import { useEffect, useState } from 'react';
import { BadgeCircular } from 'components/BadgeCircular';
import { IFilter } from 'dtos/Dashboard';
import { getFilter } from 'services/Dashboard';
import { Container, ItemFilter } from './styles';
import { DashboardStatus } from '../DashboardStatus';

interface DashboardFilterProps {
  selectFilter: number;
  // eslint-disable-next-line no-unused-vars
  setSelectFilter: (id: number) => void;
}
const DashboardFilter = ({
  selectFilter,
  setSelectFilter,
}: DashboardFilterProps) => {
  const [filters, setFilters] = useState<IFilter[]>([]);

  useEffect(() => {
    const async = async () => {
      try {
        const response = await getFilter();
        setFilters(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    async();
  }, []);

  return (
    <Container>
      {filters?.map(({ id, quantity }) => (
        <ItemFilter key={id}>
          <DashboardStatus id={id} />
          <button
            type="button"
            onClick={() => {
              console.log(selectFilter);
              setSelectFilter(id);
            }}
          >
            <BadgeCircular size={22}>{quantity}</BadgeCircular>
          </button>
        </ItemFilter>
      ))}
    </Container>
  );
};

export { DashboardFilter };
