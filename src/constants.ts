export const DAILY_CORONA_STATUS_API_SERVICE_KEY = process.env.REACT_APP_DAILY_CORONA_STATUS_API_SERVICE_KEY;
type city = {
  [index: number]: {
    name: string,
    [index: number]: string,
  },
};
export const DAILY_CONFIREMD_CITY: city = {
  1000: {
    name: '전체',
  },
  8: {
    name: '경기',
    21: '오산시',
    28: '포천시',
    30: '화성시',
  },
  13: {
    name: '경남',
    14: '남해군',
    5: '통영시',
    3: '양산시',
    12: '하동군',
    16: '산청군',
    9: '거창군',
    15: '함양군',
  },
  2: {
    name: '인천',
  },
  14: {
    name: '전북',
    10: '순창군',
    8: '부안군',
    3: '정읍시',
    5: '김제시',
  },
  9: {
    name: '강원',
    10: '평창군',
    12: '정성군',
  },
  11: {
    name: '충남',
    8: '금산군',
    9: '부여군',
  },
  7: {
    name: '세종',
  },
  4: {
    name: '광주',
  },
  15: {
    name: '전남',
  },
  0: {
    name: '서울',
  },
  6: {
    name: '울산',
    0: '중구',
    1: '남구',
    4: '울주군',
    2: '동구',
    3: '북구',
  },
  16: {
    name: '제주',
  },
  5: {
    name: '대전',
  },
  10: {
    name: '충북',
    0: '청주시',
  },
  3: {
    name: '대구',
  },
  12: {
    name: '경북',
  },
  1: {
    name: '부산',
  },
};
