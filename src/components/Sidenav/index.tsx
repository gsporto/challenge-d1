import {
  Container,
  LogoContainer,
  NavMenuContainer,
  SettingsContainer,
  Spacer,
} from './styles';
import logo from '../../assets/images/logotipo.png';
import { ReactComponent as Rocket } from '../../assets/icons/rocket.svg';
import { ReactComponent as Chart } from '../../assets/icons/chart-pie.svg';
import { ReactComponent as UserFriends } from '../../assets/icons/user-friends.svg';
import { ReactComponent as CcmCloud } from '../../assets/icons/ccm-cloud.svg';
import { ReactComponent as ExternalLink } from '../../assets/icons/external-link-square-alt.svg';
import { ReactComponent as GemSolid } from '../../assets/icons/gem-solid.svg';
import { ReactComponent as Tools } from '../../assets/icons/tools.svg';
import { ReactComponent as Exchange } from '../../assets/icons/exchange-alt.svg';
import { ReactComponent as SignOut } from '../../assets/icons/sign-out-alt.svg';
import { SidenavIcon } from '../SidenavIcon';

function Sidenav() {
  return (
    <Container>
      <LogoContainer src={logo} alt="Logo" />

      <NavMenuContainer>
        <SidenavIcon Icon={Chart} tooltip="Análises" />
        <SidenavIcon Icon={Rocket} tooltip="Análises" />
        <SidenavIcon Icon={UserFriends} tooltip="Análises" />
        <SidenavIcon Icon={CcmCloud} tooltip="Análises" />
        <Spacer />
        <SidenavIcon Icon={ExternalLink} tooltip="Análises" />
      </NavMenuContainer>
      <SettingsContainer>
        <SidenavIcon Icon={GemSolid} tooltip="Análises" />
        <SidenavIcon Icon={Tools} tooltip="Análises" />
        <SidenavIcon Icon={Exchange} tooltip="Análises" />
        <SidenavIcon Icon={SignOut} tooltip="Análises" />
      </SettingsContainer>
    </Container>
  );
}

export { Sidenav };
