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
  color: ${({ isHeader, theme }) => {
    return isHeader ? theme.colors.textLight : theme.colors.textBody;
  }};

  padding: 0 20px;

  > * {
    justify-self: start;
  }

  > span {
    justify-self: center;
  }
`;
