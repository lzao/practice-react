// 현재 날짜 차이 구하기
export function getDiffDay(date: string): number {
  const compareDate = new Date(date);
  const nowDate = new Date();
  const diffDay = Math.floor((nowDate.getTime() - compareDate.getTime()) / (1000 * 60 * 60 * 24));
  return diffDay;
}
