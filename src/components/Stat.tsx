import useConfirmedStat from 'hooks/useConfirmedStat';
import React, {ReactElement} from 'react';
import styled from 'styled-components';

const fontColors = {
  red: '#eb5374',
  blue: '#5673eb',
  gray: '#464d52',
};
const backgroundColors = {
  red: '#FDEAEE',
  blue: '#eff2ff',
  gray: '#f0f0f0',
};

const Stats = styled.div`
  color: #464d52;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 1rem 0;
`;
const StatsItem = styled.div`
  text-align: center;
  line-height: 1.5;
`;
const Title = styled.div`
  font-size: 0.725rem;
`;
const Confirmed = styled.div`
  font-size: 0.975rem;
  font-weight: bold;
  &.red {
    color: ${fontColors.red};
  }
  &.blue {
    color: ${fontColors.blue};
  }
  &.gray {
    color: ${fontColors.gray};
  }
`;
const Increase = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 1rem;
  padding: 0.25rem 0.6rem;
  &.red {
    color: ${fontColors.red};
    background-color: ${backgroundColors.red};
  }
  &.blue {
    color: ${fontColors.blue};
    background-color: ${backgroundColors.blue};
  }
  &.gray {
    color: ${fontColors.gray};
    background-color: ${backgroundColors.gray};
  }
  span {
    margin: 0 0.15rem;
  }
`;

export default function Stat(): ReactElement {
  const {confirmed, deceased, hospitalised, confirmedCritical} = {...useConfirmedStat()};

  return (
    <div>
      {!confirmed || !deceased || !hospitalised || !confirmedCritical ? (
        <div>확진된 사람이 없습니다.</div>
      ) : (
        <Stats>
          <StatsItem>
            <Title>확진자</Title>
            <Confirmed role="confirmed" className={confirmed.class}>
              {confirmed.case}
            </Confirmed>
            <Increase className={confirmed.class}>
              <span>{confirmed.increaseCase}</span>
              <strong>{confirmed.arrow}</strong>
            </Increase>
          </StatsItem>
          <StatsItem>
            <Title>사망자</Title>
            <Confirmed role="deceased" className={deceased.class}>
              {deceased.case}
            </Confirmed>
            <Increase className={deceased.class}>
              <span>{deceased.increaseCase}</span>
              <strong>{deceased.arrow}</strong>
            </Increase>
          </StatsItem>
          <StatsItem>
            <Title>입원환자</Title>
            <Confirmed role="hospitalised" className={hospitalised.class}>
              {hospitalised.case}
            </Confirmed>
            <Increase className={hospitalised.class}>
              <span>{hospitalised.increaseCase}</span>
              <strong>{hospitalised.arrow}</strong>
            </Increase>
          </StatsItem>
          <StatsItem>
            <Title>위중증자</Title>
            <Confirmed role="confirmedCritical" className={confirmedCritical.class}>
              {confirmedCritical.case}
            </Confirmed>
            <Increase className={confirmedCritical.class}>
              <span>{confirmedCritical.increaseCase}</span>
              <strong>{confirmedCritical.arrow}</strong>
            </Increase>
          </StatsItem>
        </Stats>
      )}
    </div>
  );
}
