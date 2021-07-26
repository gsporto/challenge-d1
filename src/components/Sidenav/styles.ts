import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 71px;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Spacer = styled.div`
  width: 21px;
  height: 1px;
  background: linear-gradient(90deg, #00e1ff 0%, #117eff 100%) 0% 0%;
  opacity: 1;
`;

export const Border = styled.div`
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, #00e1ff 0%, #117eff 100%) 0% 0%;
  opacity: 1;
`;

export const LogoContainer = styled.img`
  margin: 15px;
  margin-bottom: 40px;
`;

export const NavMenuContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin: 20px;
  }
`;

export const SettingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin: 20px;
  }
`;
