export default interface confirmedStat {
  confirmed: number[]; // 확진자
  deceased: number[]; // 사망자
  confirmedCritical: number[]; // 위중증자
  hospitalised: number[]; // 입원환자
}
