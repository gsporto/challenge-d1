import { IJourney } from 'dtos/Dashboard';
import { useEffect, useMemo, useState } from 'react';
import { getJourney } from 'services/Dashboard';
import { DashboardStatus } from '../DashboardStatus';
import { Container, TableRow } from './styles';

interface DashboardTableProps {
  selectFilter: number;
  searchField: string;
}

const DashboardTable = ({ selectFilter, searchField }: DashboardTableProps) => {
  const [journeys, setJourneys] = useState<IJourney[]>();

  useEffect(() => {
    const async = async () => {
      try {
        const response = await getJourney(selectFilter);
        setJourneys(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    async();
  }, [selectFilter]);

  const journeysFiltered = useMemo(() => {
    if (!searchField) {
      return journeys;
    }
    return journeys?.filter((journey) => {
      return journey.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }, [journeys, searchField]);

  return (
    <Container>
      <TableRow isHeader>
        <strong>Nome</strong>
        <span>Destinatários</span>
        <span>Sucesso</span>
        <div>Status</div>
      </TableRow>
      {journeysFiltered?.map(({ id, name, recipients, success, status }) => (
        <TableRow key={id}>
          <strong>{name}</strong>
          <span>{recipients}</span>
          <span>{success}</span>
          <div>
            <DashboardStatus id={status} />
          </div>
        </TableRow>
      ))}
    </Container>
  );
};

export { DashboardTable };
