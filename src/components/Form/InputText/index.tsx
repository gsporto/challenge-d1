import { ReactNode, InputHTMLAttributes, useState } from 'react';
import { TimesIcon } from 'react-line-awesome';

import { Container } from './styles';

interface ButtonProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  value: string;
  Icon?: ReactNode;
  onChangeText: (text: string) => void;
}

export const InputText = ({
  value,
  Icon,
  onChangeText,
  ...rest
}: ButtonProps) => {
  const [internalValue, setinternalValue] = useState<string>(value);

  const handleValue = (text: string) => {
    onChangeText(text);
    setinternalValue(text);
  };

  return (
    <Container>
      {Icon}
      <input
        type="text"
        value={internalValue}
        onChange={(event) => handleValue(event.target.value)}
        {...rest}
      />
      {value && (
        <TimesIcon
          onClick={() => {
            handleValue('');
          }}
        />
      )}
    </Container>
  );
};
