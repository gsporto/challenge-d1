import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-self: center;
  flex: 1;
  max-width: 1220px;
  margin: 0 auto;

  > strong {
    padding: 35px 0;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  width: 100%;
  height: 90px;
`;

export const BadgeCircular = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;

  width: 24px;
  height: 24px;
  font-size: 14px;
  color: #f7f7f7;
  border-radius: 50%;
  background: #117eff;
`;

export const BadgeRectangle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 30px;
  width: 90px;

  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #ebeef6;
  border-radius: 5px;
  opacity: 1;
`;

export const BadgeRectangleImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 2px 11px;
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

export const SearchInput = styled.input`
  background: #ffffff;
  border: 1px solid #cccfde;
  border-radius: 5px;

  width: 296px;
  height: 35px;
`;

export const Content = styled.section`
  display: flex;
  flex: 1;
`;
