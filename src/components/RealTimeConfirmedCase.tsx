import axios from 'axios';
import { DAILY_CONFIREMD_CITY } from '../constants';
import useConfirmedCaseInRealTime from 'hooks/useConfirmedCaseInRealTime';
import modalHeader from 'interfaces/modalHeader.interface';
import modalItems from 'interfaces/modalItems.interface';
import realTimeConfirmedCase from 'interfaces/realTimeConfirmedCase.interface';
import React, {ReactElement, useEffect, useRef, useState} from 'react';
import styled, {keyframes} from 'styled-components';

const BoxFadeIn = keyframes`
  from {
      transform: translate3d(0,10px,0);
      opacity: 0;
  }
  to {
      transform: translate3d(0,0,0);
      opacity: 1
  }
`;

const Container = styled.ul`
  padding: 1.5em 1em;
  margin-bottom: 1.5em;
  font-size: 0.75em;
  background: linear-gradient(0deg,#ffffff,transparent);
`;

const ListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: 350ms ease 0s 1 ${BoxFadeIn};
`;

const TimeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BellIcon = styled.svg`
  width: 1em;
  height: 1em;
`;

const TimeText = styled.div`
  padding-left: 0.5em;
`;

const MoreNotifyButton = styled.svg`
  width: 1.3em;
  height: 1.3em;
`;

type props = {
  openModal: () => void,
  setHeader: (p: modalHeader) => void,
  setModalItems: (p: modalItems[]) => void,
}

export default function RealTimeConfirmedCase(props: props): ReactElement {
  const items = useConfirmedCaseInRealTime();
  const [item, setItem] = useState<realTimeConfirmedCase>();
  const confirmedCaseList = useRef(0);
  const isCalled = useRef(false);

  useEffect(() => {
    if (!isCalled.current) {
      setItem(items[0]);
    }
    if (items.length > 0) {
      const id = setInterval(() => {
        if (confirmedCaseList.current === items.length-1) {
          confirmedCaseList.current = 0;
        } else {
          confirmedCaseList.current += 1;
        }
        setItem(items[confirmedCaseList.current]);
      }, 2000);
  
      return(() => {
        isCalled.current = true;
        clearInterval(id);
      })
    }
  })

  async function getModalList() {
    await axios.get<modalItems[]>('/region/daily').then(response => {
      props.setModalItems(response.data);
      const header: modalHeader = {};

      // 전체 알림 수
      header[DAILY_CONFIREMD_CITY[1000].name] = response.data.length;

      response.data.map(item => {
        if (header[DAILY_CONFIREMD_CITY[item.cityId].name]) {
          header[DAILY_CONFIREMD_CITY[item.cityId].name]++;
        } else {
          header[DAILY_CONFIREMD_CITY[item.cityId].name] = 1;
        }
      });
      props.setHeader(header);
    });
  }

  const clickModal = () => {
    getModalList();
    props.openModal();
  }

  return (
    <Container onClick={clickModal} role="real" className="component">
      {!item ? (
        <div>확진된 사람이 없습니다.</div>
      ) : (
        <ListContainer key={item.id} role="slick-realtime">
          <TimeContainer>
            <BellIcon viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M20 17h2v2H2v-2h2v-7a8 8 0 1 1 16 0v7zm-2 0v-7a6 6 0 1 0-12 0v7h12zm-9 4h6v2H9v-2z" />
            </BellIcon>
            <TimeText>{item.time}</TimeText>
          </TimeContainer>
          <div>
            <strong>{item.province}</strong> {item.confirmedCaseCount}명 추가 확진
          </div>
          <div>
            <MoreNotifyButton viewBox="0 0 250 250">
              <path d="M38.399,76.8c1.637,0,3.274,0.625,4.524,1.875l85.075,85.076l85.075-85.076c2.5-2.5,6.55-2.5,9.05,0s2.5,6.55,0,9.05  l-89.6,89.601c-2.5,2.5-6.551,2.5-9.051,0l-89.6-89.601c-2.5-2.5-2.5-6.55,0-9.05C35.124,77.425,36.762,76.8,38.399,76.8z" />
            </MoreNotifyButton>
          </div>
        </ListContainer>
      )}
    </Container>
  );
}
