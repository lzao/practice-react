import modalHeader from 'interfaces/modalHeader.interface';
import modalItems from 'interfaces/modalItems.interface';
import {DAILY_CONFIREMD_CITY} from '../constants';
import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {getDiffDay} from 'utils/common';

type props = {
  open: boolean,
  close: () => void,
  header: modalHeader,
  items: modalItems[],
};

const Container = styled.div`
  &.openModal {
    position: fixed;
    height: 100%;
    background-color: #fff;
    width: 100%;
    z-index: 1;
    padding: 1em;
    box-sizing: border-box;
    overflow-y: auto;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;
  font-size: 14px;

  .left {
    min-width: 2.5rem;
  }
  .center {
    font-weight: bold;
  }
`;

const CloseButton = styled.button`
  width: 2.25rem;
  height: 2.25rem;
  background: transparent;
  border: none;
`;

const Header = styled.header`
  display: flex;
  flex-wrap: nowrap;
  font-size: 0.75em;
  overflow-x: scroll;
  margin-bottom: 0.375rem;
  div {
    border-radius: 0.5em;
    width: 4.8em;
    height: 2.7em;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 0.3em 0.8em;
    flex: 0 0 auto;
    background-color: #f5f5f5;
    &: first-child {
      margin-left: 0;
    }
    &.on {
      border: 0.01em solid #727272c5;
      background-color: #fff;
    }
  }
`;

export default function Modal(props: props): ReactElement {
  const {open, close, header, items} = props;

  // header object 의 value 값으로 내림차순 정렬
  const sortableHeader = Object.entries(header)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({...r, [k]: v}), {});
  const headerKeys = Object.keys(sortableHeader);

  const city = DAILY_CONFIREMD_CITY;

  return (
    <Container className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <Title>
            <div className="left"></div>
            <div className="center">실시간 확진자 현황</div>
            <CloseButton type="button" onClick={close}>
              <svg viewBox="0 0 15 15" fill="var(--colors-gray900)" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                <path
                  d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
                  fill="currentColor"
                ></path>
              </svg>
            </CloseButton>
          </Title>
          <Header>
            {!header ? (
              <div>리스트가 없습니다.</div>
            ) : (
              headerKeys.map((item, index) => {
                return (
                  <div key={index} className={index == 0 ? 'on' : ''}>
                    {item} <strong>{header[item]}</strong>
                  </div>
                );
              })
            )}
          </Header>
          <main>
            {!items ? (
              <div>리스트가 없습니다.</div>
            ) : (
              items.map((item, index) => {
                return (
                  <div key={index}>
                    {getDiffDay(item.datetime)}일 전 {city[item.cityId].name} {city[item.cityId][item.guId] ? `${city[item.cityId][item.guId]} ` : ''}
                    {item.cases.toLocaleString()}명 추가 확진
                  </div>
                );
              })
            )}
          </main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </Container>
  );
}
