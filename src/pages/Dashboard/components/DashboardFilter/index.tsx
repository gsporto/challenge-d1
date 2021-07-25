import { TableIcon } from 'assets/icons';
import { BadgeCircular } from 'components/BadgeCircular';
import { Container, ItemFilter } from './styles';

const DashboardFilter = () => (
  <Container>
    <ItemFilter>
      <TableIcon />
      Todas
      <BadgeCircular size={22}>22</BadgeCircular>
    </ItemFilter>
  </Container>
);

export { DashboardFilter };
