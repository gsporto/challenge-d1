import styled from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
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
  box-shadow: ${({ isFocused }) => {
    return isFocused ? '0px 0px 2px 0px rgba(0, 0, 0, 0.75)' : undefined;
  }};
  > input {
    flex: 1;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }
`;
