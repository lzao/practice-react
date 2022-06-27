import RealTimeConfirmedCase from 'components/RealTimeConfirmedCase';
import Stat from 'components/Stat';
import React, {ReactElement} from 'react';
import Province from './components/Province';

export default function App(): ReactElement {
  return (
    <>
      <Stat />
      <RealTimeConfirmedCase />
      <Province />
    </>
  );
}
