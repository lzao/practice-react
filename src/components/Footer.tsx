import React, {MouseEvent, ReactElement} from 'react';
import styled from 'styled-components';
import {ReactComponent as Github} from '../images/github-svgrepo-com.svg';
import {ReactComponent as Email} from '../images/email.svg';

const FooterContainer = styled.div`
  height: 10rem;
  text-align: center;
  display: flex;
  background-color: #fff;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: space-evenly;
  align-content: space-around;
  background: linear-gradient(180deg, #ffffff, #ebebebdb);
`;

const Contact = styled.ul`
  display: flex;
  justify-content: center;
  li {
    padding: 0.2rem 0.5rem;
    background-color: #cacaca36;
    margin: 0 0.2rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    &.gold {
      background-color: #fdf1d8;
    }
  }
`;

const MadeBy = styled.div`
  color: #868686;
  font-size: 0.8rem;
`;

const Author = styled.span`
  color: #464d52;
  font-weight: bold;
`;

const clickGithub = () => {
  location.href = 'https://github.com/lzao/practice-react';
};

const clickEmail = (e: MouseEvent) => {
  console.log(123);
};

export default function Footer(): ReactElement {
  return (
    <FooterContainer>
      <Contact>
        <li>
          <button onClick={clickGithub}>
            <Github width="1rem" height="1rem" stroke="#000" />
          </button>
        </li>
        <li className="gold">
          <button onClick={e => clickEmail(e)}>
            <Email width="1rem" height="1rem" fill="#cb9110" />
          </button>
        </li>
      </Contact>
      <MadeBy>
        made by <Author>lzao</Author>
      </MadeBy>
    </FooterContainer>
  );
}
