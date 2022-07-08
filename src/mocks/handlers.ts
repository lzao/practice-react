import {rest} from 'msw';

const taskHandler = rest.get('/region/province', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(10),
    ctx.json({
      response: {
        header: {resultCode: '00', resultMsg: 'NORMAL SERVICE.'},
        body: {
          items: {
            item: [
              {
                createDt: '2021-11-15 09:43:21.875',
                deathCnt: 16,
                defCnt: 6363,
                gubun: '검역',
                gubunCn: '隔離區',
                gubunEn: 'Lazaretto',
                incDec: 5,
                isolClearCnt: 6219,
                isolIngCnt: 128,
                localOccCnt: 0,
                overFlowCnt: 5,
                qurRate: '-',
                seq: 13309,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.875',
                deathCnt: 7,
                defCnt: 3284,
                gubun: '제주',
                gubunCn: '济州',
                gubunEn: 'Jeju',
                incDec: 10,
                isolClearCnt: 3136,
                isolIngCnt: 141,
                localOccCnt: 10,
                overFlowCnt: 0,
                qurRate: 487,
                seq: 13308,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.875',
                deathCnt: 45,
                defCnt: 13860,
                gubun: '경남',
                gubunCn: '庆南',
                gubunEn: 'Gyeongsangnam-do',
                incDec: 46,
                isolClearCnt: 13079,
                isolIngCnt: 736,
                localOccCnt: 44,
                overFlowCnt: 2,
                qurRate: 415,
                seq: 13307,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.874',
                deathCnt: 98,
                defCnt: 10369,
                gubun: '경북',
                gubunCn: '庆北',
                gubunEn: 'Gyeongsangbuk-do',
                incDec: 34,
                isolClearCnt: 9718,
                isolIngCnt: 553,
                localOccCnt: 34,
                overFlowCnt: 0,
                qurRate: 393,
                seq: 13306,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.874',
                deathCnt: 24,
                defCnt: 3860,
                gubun: '전남',
                gubunCn: '全南',
                gubunEn: 'Jeollanam-do',
                incDec: 19,
                isolClearCnt: 3595,
                isolIngCnt: 241,
                localOccCnt: 19,
                overFlowCnt: 0,
                qurRate: 208,
                seq: 13305,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.874',
                deathCnt: 69,
                defCnt: 5692,
                gubun: '전북',
                gubunCn: '全北',
                gubunEn: 'Jeollabuk-do',
                incDec: 38,
                isolClearCnt: 5241,
                isolIngCnt: 382,
                localOccCnt: 38,
                overFlowCnt: 0,
                qurRate: 316,
                seq: 13304,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.874',
                deathCnt: 68,
                defCnt: 11613,
                gubun: '충남',
                gubunCn: '忠南',
                gubunEn: 'Chungcheongnam-do',
                incDec: 57,
                isolClearCnt: 10673,
                isolIngCnt: 872,
                localOccCnt: 57,
                overFlowCnt: 0,
                qurRate: 548,
                seq: 13303,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.873',
                deathCnt: 87,
                defCnt: 8383,
                gubun: '충북',
                gubunCn: '忠北',
                gubunEn: 'Chungcheongbuk-do',
                incDec: 18,
                isolClearCnt: 7966,
                isolIngCnt: 330,
                localOccCnt: 18,
                overFlowCnt: 0,
                qurRate: 524,
                seq: 13302,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.873',
                deathCnt: 68,
                defCnt: 7645,
                gubun: '강원',
                gubunCn: '江原',
                gubunEn: 'Gangwon-do',
                incDec: 35,
                isolClearCnt: 7237,
                isolIngCnt: 340,
                localOccCnt: 35,
                overFlowCnt: 0,
                qurRate: 496,
                seq: 13301,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.873',
                deathCnt: 1030,
                defCnt: 119036,
                gubun: '경기',
                gubunCn: '京畿',
                gubunEn: 'Gyeonggi-do',
                incDec: 602,
                isolClearCnt: 108075,
                isolIngCnt: 9931,
                localOccCnt: 596,
                overFlowCnt: 6,
                qurRate: 887,
                seq: 13300,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.873',
                deathCnt: 2,
                defCnt: 1403,
                gubun: '세종',
                gubunCn: '世宗',
                gubunEn: 'Sejong',
                incDec: 1,
                isolClearCnt: 1374,
                isolIngCnt: 27,
                localOccCnt: 1,
                overFlowCnt: 0,
                qurRate: 394,
                seq: 13299,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.873',
                deathCnt: 57,
                defCnt: 5519,
                gubun: '울산',
                gubunCn: '蔚山',
                gubunEn: 'Ulsan',
                incDec: 4,
                isolClearCnt: 5404,
                isolIngCnt: 58,
                localOccCnt: 3,
                overFlowCnt: 1,
                qurRate: 486,
                seq: 13298,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.872',
                deathCnt: 56,
                defCnt: 7885,
                gubun: '대전',
                gubunCn: '大田',
                gubunEn: 'Daejeon',
                incDec: 33,
                isolClearCnt: 7556,
                isolIngCnt: 273,
                localOccCnt: 33,
                overFlowCnt: 0,
                qurRate: 539,
                seq: 13297,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.872',
                deathCnt: 29,
                defCnt: 5649,
                gubun: '광주',
                gubunCn: '光州',
                gubunEn: 'Gwangju',
                incDec: 26,
                isolClearCnt: 5412,
                isolIngCnt: 208,
                localOccCnt: 25,
                overFlowCnt: 1,
                qurRate: 390,
                seq: 13296,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.872',
                deathCnt: 119,
                defCnt: 21523,
                gubun: '인천',
                gubunCn: '仁川',
                gubunEn: 'Incheon',
                incDec: 102,
                isolClearCnt: 19379,
                isolIngCnt: 2025,
                localOccCnt: 102,
                overFlowCnt: 0,
                qurRate: 731,
                seq: 13295,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.872',
                deathCnt: 290,
                defCnt: 17926,
                gubun: '대구',
                gubunCn: '大邱',
                gubunEn: 'Daegu',
                incDec: 49,
                isolClearCnt: 17063,
                isolIngCnt: 573,
                localOccCnt: 48,
                overFlowCnt: 1,
                qurRate: 741,
                seq: 13294,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.871',
                deathCnt: 171,
                defCnt: 14788,
                gubun: '부산',
                gubunCn: '釜山',
                gubunEn: 'Busan',
                incDec: 68,
                isolClearCnt: 13919,
                isolIngCnt: 698,
                localOccCnt: 67,
                overFlowCnt: 1,
                qurRate: 436,
                seq: 13293,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.871',
                deathCnt: 879,
                defCnt: 132668,
                gubun: '서울',
                gubunCn: '首尔',
                gubunEn: 'Seoul',
                incDec: 859,
                isolClearCnt: 117788,
                isolIngCnt: 14001,
                localOccCnt: 856,
                overFlowCnt: 3,
                qurRate: 1372,
                seq: 13292,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
              {
                createDt: '2021-11-15 09:43:21.871',
                deathCnt: 3115,
                defCnt: 397466,
                gubun: '합계',
                gubunCn: '合计',
                gubunEn: 'Total',
                incDec: 2006,
                isolClearCnt: 362834,
                isolIngCnt: 31517,
                localOccCnt: 1986,
                overFlowCnt: 20,
                qurRate: 767,
                seq: 13291,
                stdDay: '2021년 11월 15일 00시',
                updateDt: 'null',
              },
            ],
          },
          numOfRows: 20,
          pageNo: 1,
          totalCount: 19,
        },
      },
    }),
  );
});

export const taskErrorHandler = rest.get('/region/province', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.delay(10),
    ctx.json({
      response: {
        header: {resultCode: '00', resultMsg: 'NORMAL SERVICE.'},
        body: {
          items: {
            item: [],
          },
          numOfRows: 20,
          pageNo: 1,
          totalCount: 19,
        },
      },
    }),
  );
});

export const taskRealTimeConfirmedCase = rest.get('/region/real', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
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
    ]),
  );
});

export const taskRealTimeConfirmedCaseEmpty = rest.get('/region/real', (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(null));
});

export const taskLive = rest.get('/region/live', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      today: 30260,
      yesterday: 12257,
      weekAgo: 41937,
      twoWeeksAgo: 43524,
      monthAgo: 103780,
    }),
  );
});

export const taskDailyConfirmedCase = rest.get('/region/daily', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json([
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
      {
        cityId: 2,
        guId: -1,
        cases: 1417,
        datetime: '2022/05/16 18:44:33',
      },
      {
        cityId: 14,
        guId: -1,
        cases: 1285,
        datetime: '2022/05/16 18:43:26',
      },
      {
        cityId: 9,
        guId: -1,
        cases: 1352,
        datetime: '2022/05/16 18:43:22',
      },
      {
        cityId: 11,
        guId: -1,
        cases: 1328,
        datetime: '2022/05/16 18:39:45',
      },
      {
        cityId: 7,
        guId: -1,
        cases: 46,
        datetime: '2022/05/16 18:34:56',
      },
      {
        cityId: 4,
        guId: -1,
        cases: 830,
        datetime: '2022/05/16 18:33:17',
      },
      {
        cityId: 15,
        guId: -1,
        cases: 1149,
        datetime: '2022/05/16 18:32:15',
      },
      {
        cityId: 0,
        guId: -1,
        cases: 3025,
        datetime: '2022/05/16 18:30:12',
      },
      {
        cityId: 6,
        guId: 0,
        cases: 129,
        datetime: '2022/05/16 18:29:45',
      },
      {
        cityId: 6,
        guId: 1,
        cases: 274,
        datetime: '2022/05/16 18:29:14',
      },
      {
        cityId: 6,
        guId: 4,
        cases: 139,
        datetime: '2022/05/16 18:27:40',
      },
      {
        cityId: 16,
        guId: -1,
        cases: 266,
        datetime: '2022/05/16 18:27:25',
      },
      {
        cityId: 5,
        guId: -1,
        cases: 827,
        datetime: '2022/05/16 18:27:20',
      },
      {
        cityId: 10,
        guId: -1,
        cases: 212,
        datetime: '2022/05/16 18:27:06',
      },
      {
        cityId: 6,
        guId: 2,
        cases: 125,
        datetime: '2022/05/16 18:26:38',
      },
      {
        cityId: 6,
        guId: 3,
        cases: 167,
        datetime: '2022/05/16 18:23:45',
      },
      {
        cityId: 8,
        guId: -1,
        cases: 1045,
        datetime: '2022/05/16 17:27:35',
      },
      {
        cityId: 0,
        guId: -1,
        cases: 1072,
        datetime: '2022/05/16 17:23:22',
      },
      {
        cityId: 3,
        guId: -1,
        cases: 1748,
        datetime: '2022/05/16 16:54:49',
      },
      {
        cityId: 12,
        guId: -1,
        cases: 1706,
        datetime: '2022/05/16 16:23:04',
      },
      {
        cityId: 13,
        guId: 14,
        cases: 21,
        datetime: '2022/05/16 16:15:30',
      },
      {
        cityId: 13,
        guId: 5,
        cases: 16,
        datetime: '2022/05/16 16:10:30',
      },
      {
        cityId: 13,
        guId: 3,
        cases: 179,
        datetime: '2022/05/16 16:05:30',
      },
      {
        cityId: 11,
        guId: 8,
        cases: 33,
        datetime: '2022/05/16 16:04:30',
      },
      {
        cityId: 13,
        guId: 12,
        cases: 21,
        datetime: '2022/05/16 15:47:31',
      },
      {
        cityId: 8,
        guId: -1,
        cases: 1042,
        datetime: '2022/05/16 15:31:53',
      },
      {
        cityId: 1,
        guId: -1,
        cases: 1177,
        datetime: '2022/05/16 14:30:35',
      },
      {
        cityId: 8,
        guId: -1,
        cases: 1252,
        datetime: '2022/05/16 13:37:35',
      },
      {
        cityId: 0,
        guId: -1,
        cases: 1012,
        datetime: '2022/05/16 12:46:57',
      },
      {
        cityId: 10,
        guId: 0,
        cases: 210,
        datetime: '2022/05/16 10:32:30',
      },
      {
        cityId: 11,
        guId: 9,
        cases: 33,
        datetime: '2022/05/16 10:28:30',
      },
      {
        cityId: 8,
        guId: 28,
        cases: 46,
        datetime: '2022/05/16 10:26:00',
      },
      {
        cityId: 8,
        guId: 30,
        cases: 271,
        datetime: '2022/05/16 10:08:00',
      },
      {
        cityId: 13,
        guId: 16,
        cases: 3,
        datetime: '2022/05/16 10:02:00',
      },
      {
        cityId: 13,
        guId: 9,
        cases: 13,
        datetime: '2022/05/16 09:48:00',
      },
      {
        cityId: 14,
        guId: 10,
        cases: 7,
        datetime: '2022/05/16 09:33:30',
      },
      {
        cityId: 9,
        guId: 10,
        cases: 8,
        datetime: '2022/05/16 09:31:30',
      },
      {
        cityId: 14,
        guId: 8,
        cases: 20,
        datetime: '2022/05/16 09:00:30',
      },
      {
        cityId: 13,
        guId: 15,
        cases: 6,
        datetime: '2022/05/16 09:00:30',
      },
      {
        cityId: 14,
        guId: 3,
        cases: 35,
        datetime: '2022/05/16 08:54:30',
      },
      {
        cityId: 14,
        guId: 5,
        cases: 26,
        datetime: '2022/05/16 08:46:30',
      },
      {
        cityId: 9,
        guId: 12,
        cases: 15,
        datetime: '2022/05/16 08:26:00',
      },
    ]),
  );
});

export const taskStat = rest.get('/region/stat', (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      confirmed: [17795357, 13296],
      deceased: [23745, 35],
      confirmedCritical: [345, 7],
      hospitalised: [157, -116],
    }),
  );
});

export const handlers = [taskHandler, taskRealTimeConfirmedCase, taskDailyConfirmedCase, taskLive, taskStat];
