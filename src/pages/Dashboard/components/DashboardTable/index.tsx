import { IJourney } from 'dtos/Dashboard';
import { useEffect, useState } from 'react';
import { getJourney } from 'services/Dashboard';
import { Container, TableRow } from './styles';

interface DashboardTableProps {
  idFilter?: string;
}

const DashboardTable = ({ idFilter }: DashboardTableProps) => {
  const [journeys, setJourneys] = useState<IJourney[]>();

  useEffect(() => {
    const async = async () => {
      try {
        const response = await getJourney(idFilter || '');
        setJourneys(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    async();
  }, []);

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
