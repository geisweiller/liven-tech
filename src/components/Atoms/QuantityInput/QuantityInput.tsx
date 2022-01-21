import React, { useCallback, useState } from 'react';
import { ArrowV2 } from '../../../assets/images';
import { useStore } from '../../../contexts/StoreContext';
import { IQuantityInput } from './interfaces';

import * as S from './styles';

const QuantityInput: React.FC<IQuantityInput> = ({ product, increaseFn, decreaseFn }) => {
  const { updateProductInCart } = useStore();
  const handleIncreaseProduct = useCallback(() => {
    if (product.quantity < 99) {
      updateProductInCart(product.quantity + 1, product.id);
    }
  }, []);

  const handleDecreaseProduct = useCallback(() => {
    if (product.quantity > 1) {
      updateProductInCart(product.quantity - 1, product.id);
    }
  }, []);

  return (
    <S.InputContainer>
      <S.Button
        direction="left"
        onClick={handleDecreaseProduct || decreaseFn}
        data-testid="input-decrease-button"
      >
        <img src={ArrowV2} />
      </S.Button>
      <S.Input data-testid="input">{product.quantity}</S.Input>
      <S.Button
        direction="right"
        onClick={handleIncreaseProduct || increaseFn}
        data-testid="input-increase-button"
      >
        <img src={ArrowV2} />
      </S.Button>
    </S.InputContainer>
  );
};

export default QuantityInput;
