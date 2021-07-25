import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;

  padding: 20px 0;
`;

export const ItemFilter = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  font-size: 13px;

  > svg {
    height: 16px;
  }

  > div {
    margin-left: auto;
  }
`;
