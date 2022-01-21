import { fireEvent, render } from '@testing-library/react';
import { QuantityInput } from '..';

const mockedProduct = {
  id: '1',
  name: 'Test Product',
  price: '10.00',
  image: 'https://via.placeholder.com/150',
  quantity: 1,
  stock: 10,
};

const mockedDecreaseFn = jest.fn();
const mockedIncreaseFn = jest.fn();

describe('Input Component', () => {
  it('should be able to render a input', async () => {
    const { getByTestId } = render(<QuantityInput product={mockedProduct} />);
    expect(getByTestId('input')).toBeTruthy();
  });

  it('should be able to click the decrease button', async () => {
    const { getByTestId } = render(
      <QuantityInput
        product={mockedProduct}
        increaseFn={mockedIncreaseFn}
        decreaseFn={mockedDecreaseFn}
      />
    );
    const buttonElement = getByTestId('input-decrease-button');

    fireEvent.click(buttonElement);
  });

  it('input value must be 1', async () => {
    const { getByTestId } = render(
      <QuantityInput
        product={mockedProduct}
        increaseFn={mockedIncreaseFn}
        decreaseFn={mockedDecreaseFn}
      />
    );
    const inputElement = getByTestId('input');

    expect(inputElement.innerHTML).toBe('1');
  });

  // it('should be able to click the increase button', async () => {
  //   const { getByTestId } = render(
  //     <QuantityInput
  //       product={mockedProduct}
  //       increaseFn={mockedIncreaseFn}
  //       decreaseFn={mockedDecreaseFn}
  //     />
  //   );
  //   const buttonElement = getByTestId('input-increase-button');

  //   fireEvent.click(buttonElement);
  // });
});
