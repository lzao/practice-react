export default interface coronaApiProps {
  createDt: string // 조회 시작 시간
  deathCnt: number // 사망자 수
  defCnt: number // 확진자 수
  gubun: string // 시도명(한글)
  gubunCn: string // 시도명(중국어)
  gubunEn: string // 시도명(영어)
  incDec: number // 전일대비 증감 수
  isolClearCnt: number // 격리 해제 수
  isolIngCnt: number // 격리중 환자 수
  localOccCnt: number // 지역 발생 수
  overFlowCnt: number // 해외 유입 수
  qurRate: string // 10만명당 발생률
  seq: number // 게시글번호 (국내 시도별 발생 현황 고유값)
  stdDay: string // 기준 일 시
  updateDt: string|null // 수정 일시 분초
}