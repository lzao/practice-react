import React, {useEffect, useState} from 'react';
import './App.css';
import {getCorona} from './corona';

interface coronaApiPros {
  createDt: string,
  deathCnt: number,
  defCnt: number
  gubun: string,
  gubunCn: string,
  gubunEn: string,
  incDec: number,
  isolClearCnt: number,
  isolIngCnt: number,
  localOccCnt: number,
  overFlowCnt: number,
  qurRate: string,
  seq: number
  stdDay: string,
  updateDt: string
}

function App() {
  const [items, setItems] = useState<void|coronaApiPros[]>();
  const coronaItems = getCorona();

  useEffect(() => {
    coronaItems.then(response => {
      setItems(response);
    });
  }, []);

  return (
    <>
      <ul>
        {items?.map((item, index) => (
          <li key={index}>
            createDate: {item.createDt}
          </li>
        ))}
      </ul>
      <div>hi</div>
    </>
  );
}

export default App;
