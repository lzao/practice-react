export interface confirmedStatApi {
  confirmed: number[]; // 확진자
  deceased: number[]; // 사망자
  confirmedCritical: number[]; // 위중증자
  hospitalised: number[]; // 입원환자
}

type stat = {
  case: string;
  increaseCase: string;
  class: string;
  arrow: string;
};
export interface confirmedStat {
  confirmed: stat;
  deceased: stat;
  confirmedCritical: stat;
  hospitalised: stat;
}
