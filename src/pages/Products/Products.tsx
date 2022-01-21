import React, { useCallback, useRef } from 'react';
import { Arrow } from '../../assets/images';
import { useStore } from '../../contexts/StoreContext';

import * as S from './styles';
import * as Molecules from '../../components/Molecules';
import * as Atoms from '../../components/Atoms';

const Products: React.FC = () => {
  const productsRef = useRef<HTMLDivElement>(null);
  const { products, productsLoading, addProductToCart, setSortBy } = useStore();

  const opts = [
    { label: 'Crescent Value', value: 'crescent' },
    { label: 'Decrescent Value', value: 'decrescent' },
  ];
  const handleScroll = useCallback(
    (direction: string) => {
      if (productsRef.current) {
        if (direction === 'right') {
          productsRef.current.scrollLeft += productsRef.current.clientWidth;
        } else {
          productsRef.current.scrollLeft -= productsRef.current.clientWidth;
        }
      }
    },
    [productsRef]
  );

  return (
    <S.Wrapper>
      {/* <S.FilterContainer>
        <span>Filter by</span>
        <Atoms.Dropdown opts={opts} onChange={setSortBy} placeholder="Select an option" />
      </S.FilterContainer> */}
      <S.ProductsContainer ref={productsRef}>
        <S.NavigationButton
          direction="left"
          onClick={() => handleScroll('left')}
          disabled={productsLoading}
          data-testid="navigation-button-left"
        >
          <img src={Arrow} />
        </S.NavigationButton>
        {products?.map((product) => (
          <Molecules.ProductsCard
            key={product.id}
            product={product}
            onClick={() => addProductToCart(product)}
            loading={productsLoading}
          />
        ))}
        <S.NavigationButton
          direction="right"
          onClick={() => handleScroll('right')}
          disabled={productsLoading}
          data-testid="navigation-button-right"
        >
          <img src={Arrow} />
        </S.NavigationButton>
      </S.ProductsContainer>
    </S.Wrapper>
  );
};

export default Products;
