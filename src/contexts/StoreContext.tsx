import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../services/api/base';
import { ICartProducts } from '../types/cartProducts';
import { IStoreContext } from '../types/context';
import { IProducts } from '../types/products';

const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: React.FC = ({ children }) => {
  const [productsLoading, setProductsLoading] = useState(true);
  const [cartProducts, setCartProducts] = useState<ICartProducts[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);
  const [sortBy, setSortBy] = useState<string>('crescent');

  const getProducts = useCallback(async () => {
    try {
      const response = await api.get('/product');
      const data = response.data;
      if (sortBy === 'crescent') {
        setProducts(data.sort((a: IProducts, b: IProducts) => Number(a.price) - Number(b.price)));
      } else {
        setProducts(data.sort((a: IProducts, b: IProducts) => Number(b.price) - Number(a.price)));
      }
    } catch {
      toast.error('Error loading products');
    } finally {
      setProductsLoading(false);
    }
  }, [products, sortBy]);

  const addProductToCart = (product: IProducts) => {
    const productInCart = cartProducts.find((p) => p.id === product.id);

    if (productInCart) {
      productInCart.quantity += 1;
      const aux = [...cartProducts, productInCart];
      setCartProducts(Array.from(new Set(aux)));
      localStorage.setItem('cartProducts', JSON.stringify(Array.from(new Set(aux))));
    } else {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
      localStorage.setItem(
        'cartProducts',
        JSON.stringify([...cartProducts, { ...product, quantity: 1 }])
      );
    }
    toast.success(`${product?.name} added to cart!`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  const updateProductInCart = (quantity: number, id: string) => {
    const productIndex = cartProducts.findIndex((p) => p.id === id);
    const updatedProduct = {
      ...cartProducts[productIndex],
      quantity,
    };
    cartProducts[productIndex] = updatedProduct;
    setCartProducts([...cartProducts]);
  };

  const removeProductFromCart = (id: string) => {
    const productIndex = cartProducts.findIndex((p) => p.id === id);
    cartProducts.splice(productIndex, 1);
    localStorage.setItem('cartProducts', JSON.stringify([...cartProducts]));
    setCartProducts([...cartProducts]);
    toast.error(`Product removed from cart!`, {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    localStorage.getItem('cartProducts') &&
      setCartProducts(JSON.parse(localStorage.getItem('cartProducts') || '[]'));
  }, []);

  useEffect(() => {
    if (sortBy === 'crescent') {
      setProducts(products.sort((a, b) => Number(a.price) - Number(b.price)));
    }
    if (sortBy === 'decrescent') {
      setProducts(products.sort((a, b) => Number(b.price) - Number(a.price)));
    }
  }, [sortBy]);

  return (
    <StoreContext.Provider
      value={{
        cartProducts,
        products,
        productsLoading,
        sortBy,
        setCartProducts,
        addProductToCart,
        setProductsLoading,
        updateProductInCart,
        removeProductFromCart,
        setSortBy,
        getProducts,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export function useStore(): IStoreContext {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error('useStore must be used within an StoreProvider');
  }

  return context;
}
