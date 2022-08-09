import React, {ReactElement} from 'react';
import styled from 'styled-components';
import {ReactComponent as Logo} from '../images/logo.svg';

const HeaderContainer = styled.div`
  background-color: #fff;
  margin-bottom: 1rem;
  text-align: center;
  height: 3rem;
`;

export default function Header(): ReactElement {
  return (
    <HeaderContainer>
      <Logo width="15rem" height="3rem" />
    </HeaderContainer>
  );
}
