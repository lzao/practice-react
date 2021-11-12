import React from 'react';
import {render, screen} from '@testing-library/react';
import Province from './Province';

describe('Province', () => {
  it('matches snapshot', () => {
    const province = render(<Province />);
    expect(province.container).toMatchSnapshot();
  });
});
