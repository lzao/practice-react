import useLive from 'hooks/useLive';
import React, {ReactElement} from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Today = styled.div`
  color: #464d52;
  &.today-title {
    font-size: 0.75rem;
  }
  &.today-count {
    font-weight: bold;
    font-size: 1.75rem;
  }
`;
const YesterdayAndWeekAgo = styled.div``;
const Yesterday = styled.div``;
const WeekAgo = styled.div``;

const TwoWeekAgoAndMonthAgo = styled.div``;
const TwoWeekAgo = styled.div``;
const MonthAgo = styled.div``;

export default function Live(): ReactElement {
  const live = useLive();

  return (
    <Container>
      <Today>
        <div className="today-title">오늘확진자</div>
        <div className="today-count">{live.today.toLocaleString()}</div>
      </Today>
      <YesterdayAndWeekAgo>
        <Yesterday>
          <span className="yesterday-title">vs 어제</span>
          <span className="yesterday-count">{(live.yesterday - live.today).toLocaleString()}</span>
        </Yesterday>
        <WeekAgo>
          <span className="weekago-title">vs 1주전</span>
          <span className="weekago-count">{(live.weekAgo - live.today).toLocaleString()}</span>
        </WeekAgo>
      </YesterdayAndWeekAgo>
      <TwoWeekAgoAndMonthAgo>
        <TwoWeekAgo>
          <span className="yesterday-title">vs 2주전</span>
          <span className="yesterday-count">{(live.twoWeeksAgo - live.today).toLocaleString()}</span>
        </TwoWeekAgo>
        <MonthAgo>
          <span className="weekago-title">vs 4주전</span>
          <span className="weekago-count">{(live.monthAgo - live.today).toLocaleString()}</span>
        </MonthAgo>
      </TwoWeekAgoAndMonthAgo>
    </Container>
  );
}
