import { render } from '@testing-library/react';
import { ProductPic } from '..';
import { NoImage } from '../../../assets/images';

describe('Picture Component', () => {
  it('should be able to render a picture', async () => {
    const { getByTestId } = render(<ProductPic src={NoImage} alt="Test Image" />);

    expect(getByTestId('picture')).toBeTruthy();
  });
});
