import modalHeader from 'interfaces/modalHeader.interface';
import modalItems from 'interfaces/modalItems.interface';
import {DAILY_CONFIREMD_CITY} from '../constants';
import React, {ReactElement, useEffect, useState} from 'react';
import styled from 'styled-components';
import {getDiffDay} from 'utils/common';

type props = {
  open: boolean,
  close: () => void,
  header: modalHeader,
  items: modalItems[],
};

const Container = styled.div`
  &.close {
    animation: fadeout 0.2s !important;
    -moz-animation: fadeout 0.2s !important; /* Firefox */
    -webkit-animation: fadeout 0.2s !important; /* Safari and Chrome */
    -o-animation: fadeout 0.2s !important; /* Opera */
  }
  &.openModal {
    position: fixed;
    height: 100%;
    background-color: #fff;
    width: 100%;
    z-index: 1;
    padding: 1em;
    box-sizing: border-box;
    overflow-y: auto;
    animation: fadein 0.2s;
    -moz-animation: fadein 0.2s; /* Firefox */
    -webkit-animation: fadein 0.2s; /* Safari and Chrome */
    -o-animation: fadein 0.2s; /* Opera */
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
  -webkit-overflow-scrolling: touch;
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
      border: 0.01em solid #dadada;
      background-color: #fff;
      box-shadow: 0.1em 0.2em 0.5em 0px rgb(0 0 0 / 5%);
      animation: fadein 0.5s;
      -moz-animation: fadein 0.5s; /* Firefox */
      -webkit-animation: fadein 0.5s; /* Safari and Chrome */
      -o-animation: fadein 0.5s; /* Opera */
    }
  }
`;

const Items = styled.main``;

const Item = styled.div`
  display: flex;
  padding: 1.5em 0;
  border-top: 1px solid #ededed;
  font-size: 0.8em;
`;

const BellIcon = styled.svg`
  width: 1em;
  height: 1em;
  padding-right: 0.5em;
  position: relative;
  top: 2px;
`;

const Time = styled.div`
  color: #868686;
  flex-grow: 1;
  font-size: 0.9em;
`;

const Contents = styled.div`
  flex-grow: 4;
  flex-shrink: 0;
  flex-basis: 30%;
`;

const City = styled.span`
  font-weight: bold;
`;

const Cases = styled.span`
  font-weight: 100;
  color: #7f7f7f;
  font-size: 0.925em;
`;

const FooterCloseButton = styled.button`
  width: 100%;
  padding: 1em;
  background-color: #000000;
  border: none;
  color: #fff;
  border-radius: 0.5em;
`;

export default function Modal(props: props): ReactElement {
  const {open, close, header, items} = props;
  const [modalItems, setModalItems] = useState<modalItems[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const city = DAILY_CONFIREMD_CITY;

  // header object 의 value 값으로 내림차순 정렬
  const sortableHeader = Object.entries(header)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({...r, [k]: v}), {});
  const headerKeys = Object.keys(sortableHeader);

  // 상단 header 도시 버튼 클릭 시 버튼의 스타일이 활성화되고 리스트가 변경된다.
  const clickCity = (e: React.MouseEvent<HTMLDivElement>) => {
    document.querySelector('.header-btn.on')?.classList.remove('on');
    e.currentTarget.classList.add('on');
    const header = e.currentTarget.innerHTML;
    const headerKey = e.currentTarget.innerHTML.substring(0, header.indexOf(' '));
    if (headerKey === '전체') {
      setModalItems(items);
    } else {
      setModalItems(items.filter(item => city[item.cityId].name === headerKey));
    }
  };

  useEffect(() => {
    if (!open) {
      document.querySelector('.openModal')?.classList.toggle('close');
      setTimeout(() => {
        setIsOpen(false);
      }, 150);
    } else {
      setIsOpen(true);
      setModalItems(items);
    }
  }, [open, items]);

  return (
    <Container className={isOpen ? 'openModal' : ''}>
      {isOpen ? (
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
                  <div key={index} className={index == 0 ? 'header-btn on' : 'header-btn'} onClick={clickCity}>
                    {item} <strong>{header[item]}</strong>
                  </div>
                );
              })
            )}
          </Header>
          <Items>
            {!modalItems ? (
              <div>리스트가 없습니다.</div>
            ) : (
              modalItems.map((item, index) => {
                return (
                  <Item key={index}>
                    <Time>
                      <BellIcon xmlns="http://www.w3.org/2000/svg" width="12" height="12" stroke-width="1" viewBox="0 0 9.176 10.083" stroke="#868686">
                        <g id="Icon_feather-bell" data-name="Icon feather-bell" transform="translate(-4 -2.5)">
                          <path id="Path_1" data-name="Path 1" d="M11.313,5.725a2.725,2.725,0,0,0-5.451,0C5.863,8.9,4.5,9.813,4.5,9.813h8.176S11.313,8.9,11.313,5.725" fill="none"></path>
                          <path id="Path_2" data-name="Path 2" d="M16.977,31.5a.908.908,0,0,1-1.572,0" transform="translate(-7.603 -19.87)" fill="none"></path>
                        </g>
                      </BellIcon>
                      {getDiffDay(item.datetime)}일 전
                    </Time>
                    <Contents>
                      <City>
                        {city[item.cityId].name} {city[item.cityId][item.guId] ? `${city[item.cityId][item.guId]} ` : ''}
                      </City>
                      <Cases>{item.cases.toLocaleString()}명 추가 확진</Cases>
                    </Contents>
                  </Item>
                );
              })
            )}
          </Items>
          <footer>
            <FooterCloseButton type="button" className="close" onClick={close}>
              닫기
            </FooterCloseButton>
          </footer>
        </section>
      ) : null}
    </Container>
  );
}
