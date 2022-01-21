import { ICartProducts } from '../../../types/cartProducts';

export interface IQuantityInput {
  product: ICartProducts;
  increaseFn?: () => void;
  decreaseFn?: () => void;
}
