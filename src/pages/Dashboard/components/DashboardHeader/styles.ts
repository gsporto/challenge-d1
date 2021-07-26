import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 90px;
`;

export const BadgeRectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 90px;

  background: #ffffff;
  border: 1px solid #ebeef6;
  border-radius: 5px;
  opacity: 1;

  > img {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    padding: 2px 11px;
  }
`;
export const FormContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  gap: 15px;

  place-content: end;

  > button {
    > svg {
      height: 100%;
      fill: #fff;
      padding-right: 5px;
    }
  }
`;
