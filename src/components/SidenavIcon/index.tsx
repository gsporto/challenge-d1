import React from 'react';
import { Container, Tooltip } from './styles';

interface SidenavIconProps {
  tooltip: string;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

function SidenavIcon({ Icon, tooltip }: SidenavIconProps) {
  return (
    <Container data-tip data-for="registerTip">
      <Icon />
      <Tooltip
        id="registerTip"
        className="SideNavIconTooltip"
        place="right"
        effect="solid"
        delayShow={300}
        backgroundColor="#fff"
        textColor="#9196ab"
      >
        {tooltip}
      </Tooltip>
    </Container>
  );
}

export { SidenavIcon };
