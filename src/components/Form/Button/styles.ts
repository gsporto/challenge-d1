import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 10px;

  width: 150px;
  height: 35px;
  border: none;
  border-radius: 5px;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 14px;
  color: #ffffff;
  background: ${({ theme }) => theme.colors.primary};
  -webkit-transition: background-color 10000ms linear;
  -ms-transition: background-color 10000ms linear;
  transition: background-color 10000ms linear;

  &:hover {
    background: linear-gradient(
      90deg,
      rgba(0, 225, 255, 0.5) 25%,
      rgba(17, 126, 255, 1) 100%
    );
  }
`;
