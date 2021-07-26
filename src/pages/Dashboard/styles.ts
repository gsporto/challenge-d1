import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-self: center;
  flex: 1;
  max-width: 1220px;
  margin: 0 auto;

  > strong {
    padding: 35px 0;
    font-size: 18px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex: 1;
`;
