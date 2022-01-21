import styled from 'styled-components';
import { theme } from '../../../constants/theme';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 60px;

  position: fixed;
  top: 0;

  background-color: ${theme.colors.white};

  border-bottom: 1px solid ${theme.colors.lightGrey};

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);

  z-index: 10;

  div {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 10px;
      font-size: 26px;
      @media (max-width: 768px) {
        font-size: 20px;
      }
    }
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: auto;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 40px;
  }
`;

export const CartContainer = styled.div`
  position: relative;
  padding: 6px;

  :hover {
    cursor: pointer;
  }
`;

export const Cart = styled.img`
  width: 40px;
  height: 40px;
`;

export const CartCount = styled.span`
  position: absolute;

  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.red};
  width: 20px;
  height: 20px;

  border-radius: 50%;

  font-size: 12px;
  font-weight: bold;
  color: ${theme.colors.white};
`;
