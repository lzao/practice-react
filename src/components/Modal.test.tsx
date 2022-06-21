import {DAILY_CONFIREMD_CITY} from '../constants';
import modalItems from 'interfaces/modalItems.interface';
import React from 'react';

const mockItems: modalItems[] = [
  {
    cityId: 8,
    guId: 21,
    cases: 146,
    datetime: '2022/05/16 19:03:30',
  },
  {
    cityId: 8,
    guId: -1,
    cases: 4984,
    datetime: '2022/05/16 18:46:49',
  },
  {
    cityId: 13,
    guId: -1,
    cases: 1542,
    datetime: '2022/05/16 18:46:42',
  },
];

type header = {
  [index: string]: number,
};

const expectHeader = {전체: 3, 경기: 2, 인천: 1};

test('도시별로 확진자 알림 수를 가져옵니다', () => {
  const header: header = {};

  // 전체 알림 수
  header[DAILY_CONFIREMD_CITY['0'].name] = mockItems.length;
  mockItems.map(item => {
    if (header[DAILY_CONFIREMD_CITY[item.cityId].name]) {
      header[DAILY_CONFIREMD_CITY[item.cityId].name]++;
    } else {
      header[DAILY_CONFIREMD_CITY[item.cityId].name] = 1;
    }
  });

  expect(expectHeader).toEqual(header);
});
