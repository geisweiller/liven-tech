import { IProducts } from './products';

export interface ICartProducts extends IProducts {
  quantity: number;
}
