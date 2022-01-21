import { fireEvent, render } from '@testing-library/react';
import { Button } from '..';

describe('Button Component', () => {
  it('should be able to render an button', async () => {
    const { getByTestId } = render(
      <Button backgroundColor="turquoise" fontColor="turquoise">
        Go back Shopping
      </Button>
    );

    expect(getByTestId('button')).toBeTruthy();
  });

  it('should be able to click the rendered button', async () => {
    const { getByTestId } = render(
      <Button backgroundColor="turquoise" fontColor="turquoise">
        Go back Shopping
      </Button>
    );

    const buttonElement = getByTestId('button');

    fireEvent.click(buttonElement);
  });
});
