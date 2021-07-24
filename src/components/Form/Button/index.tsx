import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, type, ...rest }: ButtonProps) => (
  <Container type={type ?? 'button'} {...rest}>
    {children}
  </Container>
);
