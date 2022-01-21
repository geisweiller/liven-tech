import { IProducts } from '../../../types/products';

export interface IProductsCard
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  product: IProducts;
  loading: boolean;
}
