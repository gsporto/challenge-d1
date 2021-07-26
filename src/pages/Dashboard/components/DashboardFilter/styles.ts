import styled from 'styled-components';

interface ItemFilterProps {
  selected: boolean;
}

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;

  padding: 20px 0;
`;

export const ItemFilter = styled.button<ItemFilterProps>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  font-size: 13px;
  border: none;
  background-color: transparent;

  &:hover {
    color: #3fa8f4;

    div:last-child {
      opacity: ${({ selected }) => (!selected ? 0.5 : undefined)};
    }
  }

  div:first-child {
    color: ${({ selected, theme }) => {
      return selected ? theme.colors.primary : undefined;
    }};
    font-family: ${({ selected, theme }) => {
      return selected ? theme.fonts.bold : undefined;
    }};
  }

  div:last-child {
    margin-left: auto;
    background-color: ${({ selected }) => {
      return !selected ? '#EBEEF6' : undefined;
    }};
    color: ${({ selected }) => {
      return !selected ? '#9196AB' : undefined;
    }};
  }
`;
