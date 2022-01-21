import styled from 'styled-components';
import { theme } from '../../constants/theme';

export const CartContainer = styled.div`
  background-color: ${theme.colors.lightGrey};
  max-height: 100vh;

  padding: 20px;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
  }

  img {
    width: 50px;
    height: auto;
    margin-left: 10px;
  }
`;

export const ShoppingButton = styled.button`
  background-color: ${theme.colors.orange};
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 4px;

  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.white};

  :hover {
    opacity: 0.6;
  }
`;

export const CartEmpty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    padding: 30px 0;
  }
`;

export const CartProductsContainer = styled.div`
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1fr;
  max-height: 400px;
  margin: 10px 0;
  padding: 0 10px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.lightGrey};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.grey};
    border-radius: 10px;
  }
`;

export const CartProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 20px;

  border: 1px solid ${theme.colors.grey};
  border-radius: 4px;

  min-height: 122px;
  padding-right: 20px;

  h1 {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  p {
    color: ${theme.colors.green};
    font-size: 20px;
  }
`;

export const CartProductImage = styled.img`
  width: 120px;
  height: auto;

  align-self: center;

  border-radius: 4px;
`;

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;

  color: ${theme.colors.red};
  font-size: 16px;
  font-weight: bold;
  img {
    margin-right: 10px;
    width: 15px;
    height: 20px;
  }
`;

export const CartFooter = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.green};

  margin-top: 20px;

  span {
    grid-column: 4;
  }
`;

export const CheckoutButton = styled.button`
  background-color: ${theme.colors.turquoise};
  border: none;
  width: 200px;
  height: 50px;
  border-radius: 4px;

  grid-column: 5;

  font-size: 16px;
  font-weight: bold;
  color: ${theme.colors.white};
  justify-self: end;

  :hover {
    opacity: 0.6;
  }
`;
