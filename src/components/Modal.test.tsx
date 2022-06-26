import {DAILY_CONFIREMD_CITY} from '../constants';
import modalItems from 'interfaces/modalItems.interface';
import React from 'react';
import RealTimeConfirmedCase from './RealTimeConfirmedCase';
import userEvent from '@testing-library/user-event';
import {render, screen} from '@testing-library/react';
import Modal from './Modal';

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

const expectHeader = {전체: 3, 경기: 2, 경남: 1};

const props = {
  openModal: jest.fn(),
  setHeader: jest.fn(),
  setModalItems: jest.fn(),
};

const modalProps = {
  open: true,
  close: jest.fn(),
  header: expectHeader,
  items: mockItems,
};

test('도시별로 확진자 알림 수를 가져옵니다', () => {
  const header: header = {};

  // 전체 알림 수
  header[DAILY_CONFIREMD_CITY['1000'].name] = mockItems.length;
  mockItems.map(item => {
    if (header[DAILY_CONFIREMD_CITY[item.cityId].name]) {
      header[DAILY_CONFIREMD_CITY[item.cityId].name]++;
    } else {
      header[DAILY_CONFIREMD_CITY[item.cityId].name] = 1;
    }
  });

  expect(expectHeader).toEqual(header);
});

test('실시간 전광판 클릭 시 모달이 오픈됩니다', () => {
  render(<RealTimeConfirmedCase {...props} />);
  userEvent.click(screen.getByRole('real'));

  render(<Modal {...modalProps} />);
  const displayed = screen.getByRole('modal');
  expect(displayed).toHaveTextContent('경기 오산시 146명 추가 확진');
  expect(displayed).toHaveTextContent('경기 4,984명 추가 확진');
  expect(displayed).toHaveTextContent('경남 1,542명 추가 확진');
});

test('지역 버튼 클릭 시 해당 지역에 맞는 알람 리트스만 나옵니다', () => {
  render(<Modal {...modalProps} />);
  userEvent.click(screen.getByRole('경남'));
  const displayed1 = screen.getAllByRole('item');
  expect(displayed1).toHaveLength(1);

  userEvent.click(screen.getByRole('전체'));
  const displayed2 = screen.getAllByRole('item');
  expect(displayed2).toHaveLength(3);
});
