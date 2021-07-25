import styled from 'styled-components';

interface RowProps {
  isHeader?: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex: 2;
  gap: 10px;
  overflow: auto;
`;

export const TableRow = styled.div<RowProps>`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  align-content: center;

  height: 45px;
  font-size: 14px;
  background: ${({ isHeader }) => (isHeader ? 'transparent' : '#fff')};
  color: ${({ isHeader }) => (isHeader ? '#9196AB' : '#3E4157')};

  padding: 0 20px;

  > * {
    justify-self: center;
  }

  > strong {
    justify-self: start;
  }
`;
