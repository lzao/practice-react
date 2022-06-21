import Modal from 'components/Modal';
import RealTimeConfirmedCase from 'components/RealTimeConfirmedCase';
import modalHeader from 'interfaces/modalHeader.interface';
import modalItems from 'interfaces/modalItems.interface';
import React, {ReactElement, useState} from 'react';
import Province from './components/Province';
import './css/common.css';

export default function App(): ReactElement {
  const [modalOpen, setModalOpen] = useState(false);
  const [header, setHeader] = useState<modalHeader>({});
  const [modalItem, setModalItems] = useState<modalItems[]>([]);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Modal open={modalOpen} close={closeModal} header={header} items={modalItem} />
      <RealTimeConfirmedCase openModal={openModal} setHeader={setHeader} setModalItems={setModalItems} />
      <Province />
    </>
  );
}
