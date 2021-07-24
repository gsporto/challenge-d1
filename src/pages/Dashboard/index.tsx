import { Sidenav } from '../../components/Sidenav';
import { Container } from './styles';

import { DashboardHeader } from './components/DashboardHeader';

function Dashboard() {
  return (
    <>
      <Sidenav />
      <Container>
        <DashboardHeader />
      </Container>
    </>
  );
}

export { Dashboard };
