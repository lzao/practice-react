import {render, waitFor, screen} from '@testing-library/react';
import React from 'react';
import Live from './Live';

test('지난날의 확진자수와 오늘날 확진자 수를 비교하여 보여줍니다', async () => {
  render(<Live />);

  const todayDispalyed = await waitFor(() => screen.getByRole('today'));
  expect(todayDispalyed).toHaveTextContent('30,260');

  const yesterdayDispalyed = await waitFor(() => screen.getByRole('yesterday'));
  expect(yesterdayDispalyed.classList.contains('red')).toBe(true);
  expect(yesterdayDispalyed).toHaveTextContent('18,003');

  const weekAgoDispalyed = await waitFor(() => screen.getByRole('weekAgo'));
  expect(weekAgoDispalyed.classList.contains('blue')).toBe(true);
  expect(weekAgoDispalyed).toHaveTextContent('11,677');

  const twoWeeksAgoDispalyed = await waitFor(() => screen.getByRole('twoWeeksAgo'));
  expect(twoWeeksAgoDispalyed.classList.contains('blue')).toBe(true);
  expect(twoWeeksAgoDispalyed).toHaveTextContent('13,264');

  const monthAgoDispalyed = await waitFor(() => screen.getByRole('monthAgo'));
  expect(monthAgoDispalyed.classList.contains('blue')).toBe(true);
  expect(monthAgoDispalyed).toHaveTextContent('73,520');
});
