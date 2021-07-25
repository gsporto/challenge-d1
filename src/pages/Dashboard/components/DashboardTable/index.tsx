import { IJourney } from 'dtos/Dashboard';
import { useEffect, useState } from 'react';
import { getJourney } from 'services/Dashboard';
import { Container, TableRow } from './styles';

interface DashboardTableProps {
  selectFilter: number;
}

const DashboardTable = ({ selectFilter }: DashboardTableProps) => {
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

  return (
    <Container>
      <TableRow isHeader>
        <strong>Nome</strong>
        <span>Destinatários</span>
        <span>Sucesso</span>
        <div>Status</div>
      </TableRow>
      {journeys?.map(({ id, name, recipients, success, status }) => (
        <TableRow key={id}>
          <strong>{name}</strong>
          <span>{recipients}</span>
          <span>{success}</span>
          <div>{status}</div>
        </TableRow>
      ))}
    </Container>
  );
};

export { DashboardTable };
