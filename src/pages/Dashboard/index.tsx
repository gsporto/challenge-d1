import { useState } from 'react';
import { Sidenav } from 'components/Sidenav';
import { Container, Content } from './styles';

import { DashboardHeader } from './components/DashboardHeader';
import { DashboardFilter } from './components/DashboardFilter';
import { DashboardTable } from './components/DashboardTable';

const Dashboard = () => {
  const [selectFilter, setSelectFilter] = useState<number>(0);
  const [searchField, setSearchField] = useState<string>('');

  return (
    <>
      <Sidenav />
      <Container>
        <DashboardHeader
          searchField={searchField}
          setSearchField={(text) => setSearchField(text)}
        />
        <strong>Jornadas</strong>
        <Content>
          <DashboardFilter
            selectFilter={selectFilter}
            setSelectFilter={setSelectFilter}
          />
          <DashboardTable
            selectFilter={selectFilter}
            searchField={searchField}
          />
        </Content>
      </Container>
    </>
  );
};

export { Dashboard };
