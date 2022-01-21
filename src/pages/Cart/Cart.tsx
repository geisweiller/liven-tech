import React, { useCallback } from 'react';
import { useStore } from '../../contexts/StoreContext';

import * as S from './styles';

import * as Atoms from '../../components/Atoms';
import { Trash, CartIcon } from '../../assets/images';
import { useHistory } from 'react-router-dom';
import { calcPrice, calcTotalPrice } from '../../utils/prices';

const Cart: React.FC = () => {
  const { cartProducts, removeProductFromCart } = useStore();
  const history = useHistory();

  const HandleCart = useCallback(() => {
    if (cartProducts?.length === 0) {
      return (
        <S.CartEmpty>
          <h1>The cart is empty</h1>
          <p>Uh oh! Add something to your cart so you can see it here!</p>
          <S.ShoppingButton onClick={() => history.push('/')}>Go back shopping</S.ShoppingButton>
        </S.CartEmpty>
      );
    } else {
      return (
        <>
          <S.CartHeader>
            <div>
              <h1>Your cart</h1>
              <img src={CartIcon} />
            </div>
            <S.ShoppingButton onClick={() => history.push('/')}>Go back shopping</S.ShoppingButton>
          </S.CartHeader>
          <S.CartProductsContainer>
            {cartProducts?.map((product) => {
              return (
                <S.CartProduct key={product.id}>
                  <Atoms.ProductPic src={product.image} alt={product.name} width={120} />
                  <h1>{product.name}</h1>
                  <Atoms.QuantityInput product={product} />
                  <p>$ {calcPrice(product.price, product.quantity)}</p>
                  <S.RemoveButton
                    onClick={() => removeProductFromCart(product.id)}
                    data-testid="remove-button"
                  >
                    <img src={Trash} />
                    Remove from cart
                  </S.RemoveButton>
                </S.CartProduct>
              );
            })}
          </S.CartProductsContainer>
          <S.CartFooter>
            <span>Total: $ {calcTotalPrice(cartProducts)}</span>
            <Atoms.Button
              backgroundColor="turquoise"
              fontColor="white"
              data-testid="checkout-button"
            >
              Checkout
            </Atoms.Button>
          </S.CartFooter>
        </>
      );
    }
  }, [cartProducts]);

  return (
    <S.CartContainer>
      <HandleCart />
    </S.CartContainer>
  );
};

export default Cart;
