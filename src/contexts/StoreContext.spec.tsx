import { renderHook } from '@testing-library/react-hooks';
import MockAdapter from 'axios-mock-adapter';
import api from '../services/api/base';
import { StoreProvider, useStore } from './StoreContext';

const apiMock = new MockAdapter(api);

const mockedProduct = {
  id: '1',
  name: 'Test Product',
  price: '10.00',
  image: 'https://via.placeholder.com/150',
  quantity: 1,
  stock: 10,
};

describe('User hook', () => {
  it('should be able to get products', () => {
    apiMock.onGet('product').reply(200);

    const { result } = renderHook(() => useStore(), {
      wrapper: StoreProvider,
    });
    result.current.getProducts();
  });

  it('should be able to control products in cart', () => {
    const { result } = renderHook(() => useStore(), {
      wrapper: StoreProvider,
    });

    result.current.addProductToCart(mockedProduct);
    result.current.removeProductFromCart(mockedProduct.id);
    result.current.setCartProducts([mockedProduct]);
    result.current.updateProductInCart(1, mockedProduct.id);
  });

  it('should be control sort', () => {
    const { result } = renderHook(() => useStore(), {
      wrapper: StoreProvider,
    });

    result.current.setSortBy('decrease');
    result.current.removeProductFromCart('increase');
  });
});
