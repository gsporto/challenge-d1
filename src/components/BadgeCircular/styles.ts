import styled from 'styled-components';

interface ContainerProps {
  size: number;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  font-size: 14px;
  color: #f7f7f7;
  border-radius: 50%;
  background: #117eff;
`;
