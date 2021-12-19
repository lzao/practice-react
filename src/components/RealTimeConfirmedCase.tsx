import axios from 'axios';
import React, {ReactElement, useEffect, useRef, useState} from 'react';

interface realTimeConfirmedCase {
  id: number
  time: string
  province: string
  confirmedCaseCount: number
}

export default function RealTimeConfirmedCase(): ReactElement {
  const isCalled = useRef(false);
  const [items, setItems] = useState<realTimeConfirmedCase[]>([]);

  async function getRealTimeConfirmedCaseList() {
    await axios.get<realTimeConfirmedCase[]>('/openapi/test').then(response => {
      if (!isCalled.current) {
        setItems(response.data)
      }
    });
  }

  useEffect(() => {
    getRealTimeConfirmedCaseList();
    return () => {
      isCalled.current = true;
    };
  }, []);

  return (
    <div>
      {!items ? (
        <div>확진된 사람이 없습니다.</div>
      ) : (
        items.map((item) => (
          <li key={item.id}>
            <p>시간: {item.time}</p>
            <p>지역: {item.province}</p>
            <p>확진자수: {item.confirmedCaseCount}</p>
          </li>
        ))
      )}
    </div>
  );
}