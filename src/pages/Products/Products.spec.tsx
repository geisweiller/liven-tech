import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import Products from '.';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

describe('Products Page', () => {
  it('should render', async () => {
    expect(render(<Products />)).toBeTruthy();
  });

  it('should be scroll to left by click on button', async () => {
    const { getByTestId } = render(<Products />);

    const buttonElement = getByTestId('navigation-button-left');

    fireEvent.click(buttonElement);
  });

  it('should be scroll to right by click on button', async () => {
    const { getByTestId } = render(<Products />);

    const buttonElement = getByTestId('navigation-button-right');

    fireEvent.click(buttonElement);
  });
});
