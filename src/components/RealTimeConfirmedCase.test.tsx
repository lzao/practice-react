import React from 'react';
import server from '../setupTests';
import {taskRealTimeConfirmedCase, taskRealTimeConfirmedCaseEmpty} from '../mocks/handlers';
import {render, screen, waitFor} from '@testing-library/react';
import RealTimeConfirmedCase from './RealTimeConfirmedCase';
import realTimeConfirmedCase from 'interfaces/realTimeConfirmedCase.interface';

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

test('실시간 코로나 확진자 수의 알람이 있을 경우 하나씩 알람 내용을 보여줍니다.', async () => {
  server.use(taskRealTimeConfirmedCase);
  render(<RealTimeConfirmedCase />);

  const mockConfirmedCaseListCount = mockConfirmedCaseList.length;
  for (let index = 0; index < mockConfirmedCaseListCount; index++) {
    await waitFor(
      () => {
        const displayed = screen.getByText(mockConfirmedCaseList[index].province);
        expect(displayed).toBeInTheDocument();
      },
      {
        timeout: 2000,
      },
    );
  }
});
