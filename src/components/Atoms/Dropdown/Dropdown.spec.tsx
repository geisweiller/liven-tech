import { render } from '@testing-library/react';
import { Dropdown } from '..';

describe('Dropdown Component', () => {
  it('should be able to render a dropdown', async () => {
    const opts = [
      { label: 'Crescent Value', value: 'crescent' },
      { label: 'Decrescent Value', value: 'decrescent' },
    ];
    const onChange = jest.fn();
    const { getByTestId } = render(<Dropdown opts={opts} onChange={onChange} />);

    expect(getByTestId('dropdown')).toBeTruthy();
  });
});
