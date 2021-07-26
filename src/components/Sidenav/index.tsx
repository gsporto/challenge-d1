import {
  CcmCloudIcon,
  ChartIcon,
  ExchangeIcon,
  ExternalLinkIcon,
  GemSolidIcon,
  RocketIcon,
  SignOutIcon,
  ToolsIcon,
  UserFriendsIcon,
} from 'assets/icons';
import logo from 'assets/images/logotipo.png';
import { SidenavIcon } from '../SidenavIcon';
import {
  Border,
  Container,
  LogoContainer,
  NavMenuContainer,
  SettingsContainer,
  Spacer,
} from './styles';

const Sidenav = () => {
  return (
    <Container>
      <Border />
      <LogoContainer src={logo} alt="Logo" />
      <NavMenuContainer>
        <SidenavIcon Icon={ChartIcon} tooltip="Análises" />
        <SidenavIcon Icon={RocketIcon} tooltip="Jornadas" />
        <SidenavIcon Icon={UserFriendsIcon} tooltip="Clientes" />
        <SidenavIcon Icon={CcmCloudIcon} tooltip="CCM Cloud" />
        <Spacer />
        <SidenavIcon Icon={ExternalLinkIcon} tooltip="Versão 01" />
      </NavMenuContainer>
      <SettingsContainer>
        <SidenavIcon Icon={GemSolidIcon} tooltip="Administração" />
        <SidenavIcon Icon={ToolsIcon} tooltip="Help Desk" />
        <SidenavIcon Icon={ExchangeIcon} tooltip="Trocar Conta" />
        <SidenavIcon Icon={SignOutIcon} tooltip="Sair" />
      </SettingsContainer>
      <Border />
    </Container>
  );
};

export { Sidenav };
