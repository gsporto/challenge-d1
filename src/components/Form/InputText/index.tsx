import { ReactNode, InputHTMLAttributes } from 'react';
import { TimesIcon } from 'react-line-awesome';

import { Container } from './styles';

interface ButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  Icon?: ReactNode;
}

export const InputText = ({ value, Icon, ...rest }: ButtonProps) => (
  <Container>
    {Icon}
    <input type="text" {...rest} />
    {value && <TimesIcon />}
  </Container>
);
