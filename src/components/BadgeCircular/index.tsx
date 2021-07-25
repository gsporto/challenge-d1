import { ReactNode } from 'react';
import { Container } from './styles';

interface BadgeCircularProps {
  children: ReactNode;
  size: number;
}

function BadgeCircular({ children, size }: BadgeCircularProps) {
  return <Container size={size}>{children}</Container>;
}

export { BadgeCircular };
