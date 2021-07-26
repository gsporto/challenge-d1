import React, { useState } from 'react';
import { Container, Tooltip } from './styles';

interface SidenavIconProps {
  tooltip: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const SidenavIcon = ({ Icon, tooltip }: SidenavIconProps) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  return (
    <Container
      onMouseOver={() => {
        setShowToast(true);
      }}
      onMouseLeave={() => {
        setShowToast(false);
      }}
    >
      <Icon />
      <Tooltip show={showToast}>
        <span>{tooltip}</span>
      </Tooltip>
    </Container>
  );
};
