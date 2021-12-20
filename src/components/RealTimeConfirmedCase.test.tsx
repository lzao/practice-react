import React from 'react';
import server from '../setupTests';
import {taskRealTimeConfirmedCase, taskRealTimeConfirmedCaseEmpty} from '../mocks/handlers';
import {render, screen, waitFor} from '@testing-library/react';
import RealTimeConfirmedCase from './RealTimeConfirmedCase';
import realTimeConfirmedCase from 'interfaces/realTimeConfirmedCase';

const mockConfirmedCaseList: realTimeConfirmedCase[] = [
  {
    id: 1,
    time: '2시간전',
    province: '충북 제천',
    confirmedCaseCount: 22,
  },
  {
    id: 2,
    time: '3시간전',
    province: '서울 강남',
    confirmedCaseCount: 30,
  },
  {
    id: 3,
    time: '4시간전',
    province: '강원 강릉',
    confirmedCaseCount: 5,
  },
];

test('코로나 확진자가 없을 경우 "확진된 사람이 없습니다." 라는 문구가 나타납니다.', async () => {
  server.use(taskRealTimeConfirmedCaseEmpty);
  render(<RealTimeConfirmedCase />);

  const displayed = await waitFor(() => screen.getByText('확진된 사람이 없습니다.'), {
    timeout: 500,
  });
  expect(displayed).toBeInTheDocument();
});

test('코로나 확진자가 있을 경우 확진된 지역 수 만큼 리스트로 노출됩니다.', async () => {
  server.use(taskRealTimeConfirmedCase);
  render(<RealTimeConfirmedCase />);

  const list = await screen.findAllByRole('slick-realtime');
  expect(list).toHaveLength(mockConfirmedCaseList.length);
});
