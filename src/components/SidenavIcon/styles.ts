import styled from 'styled-components';

interface TooltipProps {
  show: boolean;
}

export const Container = styled.div`
  width: 20px;
  cursor: pointer;
  position: relative;
  > svg {
    transition: fill, 0.3s;
    &:hover {
      fill: #117eff;
    }

    fill: #e4e6f1;
  }
`;

export const Tooltip = styled.div<TooltipProps>`
  position: absolute;
  top: 0;
  left: ${({ show }) => (show ? 40 : 100)}px;
  height: 30px;
  background: #ffffff;
  box-shadow: 1px 1px 6px #00000029;
  border-radius: 5px;
  padding: 10px;
  visibility: ${({ show }) => (show ? 'visible' : 'hidden')};
  opacity: ${({ show }) => (show ? 1 : 0)};
  white-space: nowrap;
  transition: all 0.5s;

  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
    content: ' ';
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent #ffffff transparent transparent;
  }
`;
