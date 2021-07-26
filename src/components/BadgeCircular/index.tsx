import { ReactNode } from 'react';
import { Container } from './styles';

interface BadgeCircularProps {
  children: ReactNode;
  size: number;
  color?: string;
  background?: string;
}

function BadgeCircular({ children, ...rest }: BadgeCircularProps) {
  return (
    <Container data-testid="badge-circular" {...rest}>
      {children}
    </Container>
  );
}

export { BadgeCircular };
