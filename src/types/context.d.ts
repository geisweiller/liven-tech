import { ICartProducts } from './cartProducts';
import { IProducts } from './products';

export interface IStoreContext {
  cartProducts: ICartProducts[];
  products: IProducts[];
  productsLoading: boolean;
  sortBy: string;
  setCartProducts: (cartProducts: ICartProducts[]) => void;
  addProductToCart: (product: IProducts) => void;
  setProductsLoading: (loading: boolean) => void;
  updateProductInCart: (quantiry: number, id: string) => void;
  removeProductFromCart: (id: string) => void;
  setSortBy: (sortBy: string) => void;
  getProducts: () => void;
}
