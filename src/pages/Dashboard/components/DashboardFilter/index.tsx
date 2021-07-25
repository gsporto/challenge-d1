import { useEffect, useState } from 'react';
import { TableIcon } from 'assets/icons';
import { BadgeCircular } from 'components/BadgeCircular';
import { IFilter } from 'dtos/Dashboard';
import { getFilter } from 'services/Dashboard';
import { Container, ItemFilter } from './styles';

const DashboardFilter = () => {
  const [filters, setFilters] = useState<IFilter[]>();

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
      {filters?.map(({ id, name, quantity }) => (
        <ItemFilter key={id}>
          <TableIcon />
          {name}
          <BadgeCircular size={22}>{quantity}</BadgeCircular>
        </ItemFilter>
      ))}
    </Container>
  );
};

export { DashboardFilter };
