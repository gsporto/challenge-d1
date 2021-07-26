import styled from 'styled-components';
import {
  TableIcon,
  PaperPlaneIcon,
  PlayCircleIcon,
  PenIcon,
  BedIcon,
  CheckIcon,
} from 'assets/icons';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  > svg {
    height: 16px;
  }
`;

export const TableIconStyled = styled(TableIcon)`
  fill: #d190dd;
`;

export const PaperPlaneIconStyled = styled(PaperPlaneIcon)`
  fill: #c1ca4f;
`;

export const PlayCircleIconStyled = styled(PlayCircleIcon)`
  fill: #35c667;
`;

export const PenIconStyled = styled(PenIcon)`
  fill: #3fa8f4;
`;

export const BedIconStyled = styled(BedIcon)`
  fill: #ebbd3e;
`;

export const CheckIconStyled = styled(CheckIcon)`
  fill: #9fabd5;
`;
