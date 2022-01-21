import React from 'react';
import { useHistory } from 'react-router-dom';
import { CartIcon, Dices } from '../../../assets/images';
import { useStore } from '../../../contexts/StoreContext';

import * as S from './styles';

const Header: React.FC = () => {
  const { cartProducts } = useStore();
  const history = useHistory();
  return (
    <S.HeaderContainer data-testid="header">
      <div>
        <S.Logo src={Dices} onClick={() => history.push('/')} data-testid="logo" />
        <h1>Random Things Store</h1>
      </div>
      <div>
        <S.CartContainer onClick={() => history.push('/cart')} data-testid="cart-button">
          <S.Cart src={CartIcon} />
          <S.CartCount>{cartProducts?.length}</S.CartCount>
        </S.CartContainer>
      </div>
    </S.HeaderContainer>
  );
};

export default Header;
