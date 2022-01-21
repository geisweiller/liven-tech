import styled from 'styled-components';
import { theme } from '../../../constants/theme';

export const Product = styled.div`
  border: 1px solid ${theme.colors.clear};
  min-width: 220px;
  min-height: 380px;
  padding: 12px;
  border-radius: 4px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${theme.colors.lightGrey};
  background-color: ${theme.colors.lightGrey};

  justify-content: flex-end;

  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    flex-direction: column;
    padding: 10px 0;
    justify-content: space-between;
  }
  h1 {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 12px;
  }
  button {
    width: 100%;
    outline: none;
    height: 40px;

    border-radius: 4px;
    border: 1px solid ${theme.colors.lightGrey};

    background-color: ${theme.colors.turquoise};
    color: ${theme.colors.white};
    font-size: 16px;

    :hover {
      opacity: 0.7;
    }
  }
`;

export const PriceLabel = styled.span`
  p {
    font-size: 20px;
    color: ${theme.colors.green};
    font-weight: bold;
  }
`;

export const StockLabel = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 0;
  margin-top: 4px;
  background-color: ${theme.colors.orange};
  color: ${theme.colors.white};

  border-radius: 4px;

  font-size: 14px;
`;
