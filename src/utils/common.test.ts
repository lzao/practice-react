import {getDiffDay} from 'utils/common';
import React from 'react';

test('날짜를 받아서 현재 날짜와 몇 일 차이나는지 계산합니다.', () => {
  const nowDate = new Date();
  const compareDate = new Date('2022/05/16 19:03:30');
  const expectDay = Math.floor((nowDate.getTime() - compareDate.getTime()) / (1000 * 60 * 60 * 24));
  expect(expectDay).toEqual(getDiffDay('2022/05/16 19:03:30'));
});
