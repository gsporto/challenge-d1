import styled from 'styled-components';

interface ContainerProps {
  size: number;
  color?: string;
  background?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  font-size: ${({ size }) => size / 2}px;
  color: ${({ color }) => color ?? '#f7f7f7'};
  border-radius: 50%;
  background: ${({ background, theme }) => background ?? theme.colors.primary};

  font-family: ${({ theme }) => theme.fonts.bold};
  font-weight: 500;
`;
