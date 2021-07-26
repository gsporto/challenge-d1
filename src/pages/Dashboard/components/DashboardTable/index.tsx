import { IJourney } from 'dtos/Dashboard';
import { useEffect, useMemo, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { getJourney } from 'services/Dashboard';
import { DashboardStatus } from '../DashboardStatus';
import { Container, TableRow } from './styles';

interface DashboardTableProps {
  selectFilter: number;
  searchField: string;
}

export const DashboardTable = ({
  selectFilter,
  searchField,
}: DashboardTableProps) => {
  const { addToast } = useToasts();
  const [journeys, setJourneys] = useState<IJourney[]>();

  useEffect(() => {
    const async = async () => {
      try {
        const response = await getJourney(selectFilter);
        setJourneys(response.data);
      } catch (error) {
        addToast('Erro ao carregar Jornadas, tente novamente mais tarde!', {
          appearance: 'error',
        });
      }
    };
    async();
  }, [addToast, selectFilter]);

  const journeysFiltered = useMemo(() => {
    if (!searchField) {
      return journeys;
    }
    return journeys?.filter((journey) => {
      return journey.name.toLowerCase().includes(searchField.toLowerCase());
    });
  }, [journeys, searchField]);

  return (
    <Container data-testid="dashboard-table-container">
      <TableRow isHeader>
        <div>Nome</div>
        <span>Destinatários</span>
        <span>Sucesso</span>
        <span>Status</span>
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
