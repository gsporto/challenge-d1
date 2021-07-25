import { Container, TableRow } from './styles';

const DashboardTable = () => (
  <Container>
    <TableRow isHeader>
      <strong>Nome</strong>
      <span>Destinatários</span>
      <span>Sucesso</span>
      <div>Status</div>
    </TableRow>
    <TableRow>
      <strong>Cobrança</strong>
      <span>20.210.000</span>
      <span>30%</span>
      <div>Enviando</div>
    </TableRow>
    <TableRow>
      <strong>Cobrança</strong>
      <span>20.210.000</span>
      <span>30%</span>
      <div>Enviando</div>
    </TableRow>
    <TableRow>
      <strong>Cobrança</strong>
      <span>20.210.000</span>
      <span>30%</span>
      <div>Enviando</div>
    </TableRow>
    <TableRow>
      <strong>Cobrança</strong>
      <span>20.210.000</span>
      <span>30%</span>
      <div>Enviando</div>
    </TableRow>
  </Container>
);

export { DashboardTable };
