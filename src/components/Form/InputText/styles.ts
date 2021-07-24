import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffff;
  border: 1px solid #cccfde;
  border-radius: 5px;

  width: 296px;
  height: 35px;
  padding: 10px;
  gap: 10px;

  > input {
    flex: 1;
    border: none;
  }
`;
