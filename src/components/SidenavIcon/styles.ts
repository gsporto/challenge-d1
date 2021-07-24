import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

export const Container = styled.div`
  width: 20px;
  cursor: pointer;
  > svg {
    transition: fill, 0.3s;
    &:hover {
      fill: #117eff;
    }

    fill: #e4e6f1;
  }
`;

export const Tooltip = styled(ReactTooltip)`
  &.SideNavIconTooltip {
    transition: all 0.3s;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  }
`;
