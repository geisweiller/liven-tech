import { fireEvent, render, waitFor } from '@testing-library/react';
import { Header } from '..';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Header Component', () => {
  it('should be able to render header', async () => {
    const { getByTestId } = render(<Header />);

    expect(getByTestId('header')).toBeTruthy();
  });

  it('should be able to click cart button and go to cart page', async () => {
    const { getByTestId } = render(<Header />);

    const buttonElement = getByTestId('cart-button');

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/cart');
    });
  });

  it('should be able to click the add to cart button', async () => {
    const { getByTestId } = render(<Header />);

    const buttonElement = getByTestId('logo');

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });
});
