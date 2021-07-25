import { Sidenav } from '../../components/Sidenav';
import { Container, Content } from './styles';

import { DashboardHeader } from './components/DashboardHeader';
import { DashboardFilter } from './components/DashboardFilter';
import { DashboardTable } from './components/DashboardTable';

function Dashboard() {
  return (
    <>
      <Sidenav />
      <Container>
        <DashboardHeader />
        <Content>
          <DashboardFilter />
          <DashboardTable />
        </Content>
      </Container>
    </>
  );
}

export { Dashboard };
