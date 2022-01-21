import React, { useCallback, useEffect } from 'react';
import { Atoms } from '../..';
import { IProductsCard } from './interfaces';
import ContentLoader from 'react-content-loader';
import * as S from './styles';
import { theme } from '../../../constants/theme';

const ProductsCard: React.FC<IProductsCard> = ({ product, loading, ...props }) => {
  const Skeleton = useCallback(() => {
    return (
      <ContentLoader
        height={380}
        width={220}
        backgroundColor={theme.colors.grey}
        data-testid="loading"
      >
        <rect x="0" y="0" rx="5" ry="5" width="220" height="380" />
      </ContentLoader>
    );
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <S.Product data-testid="product-card" key={props.key}>
          <Atoms.ProductPic src={product.image} alt={product.name} />
          <h1 title={product.name}>{product.name}</h1>
          <div>
            <S.PriceLabel>
              <p>$ {product.price}</p>
            </S.PriceLabel>
            <S.StockLabel>
              <p>Avaible in Stock: {product.stock}</p>
            </S.StockLabel>
          </div>
          <Atoms.Button backgroundColor="turquoise" fontColor="white" onClick={props.onClick}>
            Add to Cart
          </Atoms.Button>
        </S.Product>
      )}
    </>
  );
};

export default ProductsCard;
