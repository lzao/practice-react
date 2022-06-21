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
  }
`;

export default function Modal(props: props): ReactElement {
  const {open, close, header, items} = props;

  const headerKeys = Object.keys(header);

  const city = DAILY_CONFIREMD_CITY;

  return (
    <Container className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <div>실시간 확진자 현황</div>
          <header>
            {!header ? (
              <div>리스트가 없습니다.</div>
            ) : (
              headerKeys.map((item, index) => {
                return (
                  <span key={index}>
                    {item}: {header[item]}
                  </span>
                );
              })
            )}
          </header>
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
