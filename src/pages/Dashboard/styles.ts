import styled from 'styled-components';
import Modal from 'react-modal';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-self: center;
  flex: 1;
  max-width: 1220px;
  margin: 0 auto;

  > strong {
    padding: 35px 0;
    font-size: 18px;
  }
`;

export const Content = styled.section`
  display: flex;
  flex: 1;
`;

export const ModalNewJorney = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  > div {
    width: 382px;
    height: 215px;
    background: #ffffff;
    box-shadow: 1px 1px 10px #1a173134;
    border: 1px solid #e4e6f1;
    border-radius: 7px;
    padding: 30px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    > strong {
      color: ${({ theme }) => theme.colors.textLight};
    }

    > div {
      margin-top: auto;
      font-size: 14px;
      color: #3e4157;
    }
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  > div {
    width: 100%;
  }
`;

export const ButtonContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;

  > button {
    font-family: ${({ theme }) => theme.fonts.bold};
    font-weight: 500;
    &:first-child {
      color: #117eff;
    }

    border: none;
    background-color: transparent;
  }
`;

export const Spacer = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e4e6f1;
  margin: 10px 0;
`;
