import { ICartProducts } from '../types/cartProducts';

export const calcPrice = (price: string, quantity: number) => {
  const result = Number(price) * quantity;
  return result.toFixed(2);
};

export const calcTotalPrice = (products: ICartProducts[]) => {
  let totalPrice = 0;
  products?.forEach((product) => {
    totalPrice += Number(product.price) * product.quantity;
  });
  return totalPrice.toFixed(2);
};
