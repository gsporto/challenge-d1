import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;

  height: 100vh;
  width: 71px;

  background-color: #1a1731;
`;

export const Spacer = styled.div`
  width: 21px;
  height: 1px;
  background: transparent linear-gradient(90deg, #00e1ff 0%, #117eff 100%) 0% 0%
    no-repeat padding-box;
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
