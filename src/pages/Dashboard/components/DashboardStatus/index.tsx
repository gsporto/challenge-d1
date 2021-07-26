import { useCallback } from 'react';
import {
  BedIconStyled,
  CheckIconStyled,
  Container,
  PaperPlaneIconStyled,
  PenIconStyled,
  PlayCircleIconStyled,
  TableIconStyled,
} from './styles';

interface StatusProps {
  id: number;
}

export const DashboardStatus = ({ id }: StatusProps) => {
  const getStatus = useCallback((idStatus) => {
    switch (idStatus) {
      case 0:
        return (
          <>
            <TableIconStyled />
            Todos
          </>
        );
      case 1:
        return (
          <>
            <PaperPlaneIconStyled />
            Em Execução
          </>
        );
      case 2:
        return (
          <>
            <PlayCircleIconStyled />
            Ativa
          </>
        );
      case 3:
        return (
          <>
            <PenIconStyled />
            Configurando
          </>
        );
      case 4:
        return (
          <>
            <BedIconStyled />
            Ociosa
          </>
        );
      case 5:
        return (
          <>
            <CheckIconStyled />
            Concluída
          </>
        );
      default:
        return (
          <>
            <TableIconStyled />
          </>
        );
    }
  }, []);

  return <Container>{getStatus(id)}</Container>;
};
