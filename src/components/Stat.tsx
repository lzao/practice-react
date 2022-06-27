import useConfirmedStat from 'hooks/useConfirmedStat';
import React, {ReactElement} from 'react';
import styled from 'styled-components';

const Stats = styled.div`
  display: flex;
  justify-content: space-around;
`;
const StatsItem = styled.div`
  text-align: center;
`;
const ItemTitle = styled.div`
  font-size: 0.725rem;
`;
const ItemConfirmed = styled.div`
  font-size: 0.975rem;
  &.red {
    color: #eb5374;
  }
  &.blue {
    color: #5673eb;
  }
  &.gray {
    color: #464d52;
  }
`;

export default function Stat(): ReactElement {
  const stat = useConfirmedStat();

  return (
    <div>
      {!stat ? (
        <div>확진된 사람이 없습니다.</div>
      ) : (
        <Stats>
          <StatsItem role="confirmed">
            <ItemTitle>확진자</ItemTitle>
            <div>{stat.confirmed[0].toLocaleString()}</div>
            <div>{stat.confirmed[1].toLocaleString()}</div>
          </StatsItem>
          <StatsItem role="deceased">
            <ItemTitle>사망자</ItemTitle>
            <div>{stat.deceased[0].toLocaleString()}</div>
            <div>{stat.deceased[1].toLocaleString()}</div>
          </StatsItem>
          <StatsItem role="hospitalised">
            <ItemTitle>입원환자</ItemTitle>
            <div>{stat.hospitalised[0].toLocaleString()}</div>
            <div>{stat.hospitalised[1].toLocaleString()}</div>
          </StatsItem>
          <StatsItem role="confirmedCritical">
            <ItemTitle>위중증자</ItemTitle>
            <div>{stat.confirmedCritical[0].toLocaleString()}</div>
            <div>{stat.confirmedCritical[1].toLocaleString()}</div>
          </StatsItem>
        </Stats>
      )}
    </div>
  );
}
