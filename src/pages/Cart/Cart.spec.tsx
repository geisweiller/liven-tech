import { render, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';
import Cart from '.';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Cart Page', () => {
  it('should render', async () => {
    expect(render(<Cart />)).toBeTruthy();
  });

  // it('should be able to remove from cart', async () => {
  //   const { getByText } = render(<Cart />);

  //   const buttonElement = getByText('Remove from cart');

  //   fireEvent.click(buttonElement);
  // });

  it('should be able to go back shopping', async () => {
    const { getByText } = render(<Cart />);

    const buttonElement = getByText('Go back shopping');

    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/');
    });
  });
});
