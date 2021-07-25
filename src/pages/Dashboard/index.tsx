import { useState } from 'react';
import { Sidenav } from '../../components/Sidenav';
import { Container, Content } from './styles';

import { DashboardHeader } from './components/DashboardHeader';
import { DashboardFilter } from './components/DashboardFilter';
import { DashboardTable } from './components/DashboardTable';

function Dashboard() {
  const [selectFilter, setSelectFilter] = useState<number>(0);

  return (
    <>
      <Sidenav />
      <Container>
        <DashboardHeader />
        <Content>
          <DashboardFilter
            selectFilter={selectFilter}
            setSelectFilter={setSelectFilter}
          />
          <DashboardTable selectFilter={selectFilter} />
        </Content>
      </Container>
    </>
  );
}

export { Dashboard };
