import {render, screen, waitFor} from '@testing-library/react';
import React from 'react';
import Stat from './Stat';

test('전체 코로나 현황을 보여줍니다', async () => {
  render(<Stat />);
  const confirmedDisplayed = await waitFor(() => screen.getByRole('confirmed'));
  expect(confirmedDisplayed.classList.contains('red')).toBe(true);
  expect(confirmedDisplayed).toHaveTextContent('17,795,357');

  const deceasedDisplayed = await waitFor(() => screen.getByRole('deceased'));
  expect(deceasedDisplayed.classList.contains('gray')).toBe(true);
  expect(deceasedDisplayed).toHaveTextContent('23,745');

  const hospitalisedDisplayed = await waitFor(() => screen.getByRole('hospitalised'));
  expect(hospitalisedDisplayed.classList.contains('blue')).toBe(true);
  expect(hospitalisedDisplayed).toHaveTextContent('157');

  const confirmedCriticalDisplayed = await waitFor(() => screen.getByRole('confirmedCritical'));
  expect(confirmedCriticalDisplayed.classList.contains('gray')).toBe(true);
  expect(confirmedCriticalDisplayed).toHaveTextContent('345');
});
