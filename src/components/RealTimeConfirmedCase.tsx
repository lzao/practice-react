import useConfirmedCaseInRealTime from 'hooks/useConfirmedCaseInRealTime';
import realTimeConfirmedCase from 'interfaces/realTimeConfirmedCase.interface';
import React, {ReactElement, useEffect, useRef, useState} from 'react';
import styled, {keyframes} from 'styled-components';

const BoxFadeIn = keyframes`
  from {
      transform: translate3d(0,10px,0)
  }
  to {
      transform: translate3d(0,0,0);
      opacity: 1
  }
`;

const Container = styled.ul`
  border: 1px solid #e6e6ea;
  box-shadow: rgb(0 0 0 / 4%) 0px 2px 10px 0px;
  border-radius: 0.725em;
  padding: 1em;
  margin-bottom: 3em;
  background: linear-gradient(180deg, #f7f7f7, transparent);
  font-size: 0.75em;
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

export default function RealTimeConfirmedCase(): ReactElement {
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

  return (
    <Container>
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