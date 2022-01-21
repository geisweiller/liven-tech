import { fireEvent, render } from '@testing-library/react';
import { ProductsCard } from '..';

const mockedProduct = {
  id: '1',
  name: 'Test Product',
  price: '10.00',
  image: 'https://via.placeholder.com/150',
  quantity: 1,
  stock: 10,
};

describe('Card Component', () => {
  it('should be able to render a picture instead of loading', async () => {
    const { getByTestId } = render(<ProductsCard product={mockedProduct} loading={false} />);

    expect(getByTestId('product-card')).toBeTruthy();
  });

  it('should be able to render loading skeleton instead of card', async () => {
    const { getByTestId } = render(<ProductsCard product={mockedProduct} loading />);

    expect(getByTestId('loading')).toBeTruthy();
  });

  it('should be able to click the add to cart button', async () => {
    const { getByTestId } = render(<ProductsCard product={mockedProduct} loading={false} />);

    const buttonElement = getByTestId('button');

    fireEvent.click(buttonElement);
  });
});
