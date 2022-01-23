import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import Province from './Province';
import {taskErrorHandler} from '../mocks/handlers';
import server from '../setupTests';

test('일일 코로나 현황 검역의 확진자수가 6363명 입니다.', async () => {
  render(<Province />);
  const displayed = await waitFor(() => screen.getByText('6,363명'));
  expect(displayed).toBeInTheDocument();
});

test('일일 코로나 현황의 데이터가 없으면 empty. 를 노출합니다.', async () => {
  server.use(taskErrorHandler);
  render(<Province />);
  const displayed = await waitFor(() => screen.getByText('empty.'));
  expect(displayed).toBeInTheDocument();
});
