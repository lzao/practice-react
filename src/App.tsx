import RealTimeConfirmedCase from 'components/RealTimeConfirmedCase';
import React, {ReactElement} from 'react';
import Province from './components/Province';

export default function App(): ReactElement {
  return (
    <>
      <RealTimeConfirmedCase />
      <Province />
    </>
  );
}
