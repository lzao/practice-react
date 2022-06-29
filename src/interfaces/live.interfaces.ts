export interface liveApi {
  today: number;
  yesterday: number;
  weekAgo: number;
  twoWeeksAgo: number;
  monthAgo: number;
}

type liveProps = {
  case: string;
  class: string;
};
export interface live {
  today: string;
  yesterday: liveProps;
  weekAgo: liveProps;
  twoWeeksAgo: liveProps;
  monthAgo: liveProps;
}
