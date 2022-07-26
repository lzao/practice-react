import useLive from 'hooks/useLive';
import React, {ReactElement} from 'react';
import styled from 'styled-components';

const fontColors = {
  red: '#eb5374',
  blue: '#5673eb',
};
const backgroundColors = {
  red: '#FDEAEE',
  blue: '#eff2ff',
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 0.75rem;
  margin-top: 1rem;
`;
const Today = styled.div`
  text-align: center;
  color: #464d52;
  flex-grow: 0;
  margin: 0.2rem 0.8rem 0;
  line-height: 1.5;
  div.today-count {
    font-weight: bold;
    font-size: 1.75rem;
  }
`;
const Ago = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  div.compare {
    display: flex;
    align-items: center;
    &:first-child {
      margin-right: 0.3rem;
      flex-grow: 0;
    }
    &:last-child {
      flex-grow: 1;
      margin-top: 0.5rem;
    }
    span.title {
      min-width: 3.4rem;
      &:before {
        color: #868686;
        content: 'vs';
        margin-right: 0.5rem;
      }
    }
    span.count {
      font-weight: bold;
      border-radius: 0.725rem;
      padding: 0.25rem 0.2rem;
      min-width: 4rem;
      text-align: center;
      &.red {
        color: ${fontColors.red};
        background-color: ${backgroundColors.red};
        &:after {
          content: ' ▲';
        }
      }
      &.blue {
        color: ${fontColors.blue};
        background-color: ${backgroundColors.blue};
        &:after {
          content: ' ▼';
        }
      }
    }
  }
`;

export default function Live(): ReactElement {
  const {today, yesterday, weekAgo, twoWeeksAgo, monthAgo} = {...useLive()};

  return (
    <Container className="component">
      {!today || !yesterday || !weekAgo || !twoWeeksAgo || !monthAgo ? (
        <div>확진된 사람이 없습니다.</div>
      ) : (
        <>
          <Today>
            <div className="today-title">오늘확진자</div>
            <div className="today-count" role="today">
              {today}
            </div>
          </Today>
          <Ago>
            <div className="compare">
              <span className="title">어제</span>
              <span className={yesterday.class + ' count'} role="yesterday">
                {yesterday.case}
              </span>
            </div>
            <div className="compare">
              <span className="title">1주전</span>
              <span className={weekAgo.class + ' count'} role="weekAgo">
                {weekAgo.case}
              </span>
            </div>
          </Ago>
          <Ago>
            <div className="compare">
              <span className="title">2주전</span>
              <span className={twoWeeksAgo.class + ' count'} role="twoWeeksAgo">
                {twoWeeksAgo.case}
              </span>
            </div>
            <div className="compare">
              <span className="title">4주전</span>
              <span className={monthAgo.class + ' count'} role="monthAgo">
                {monthAgo.case}
              </span>
            </div>
          </Ago>
        </>
      )}
    </Container>
  );
}
