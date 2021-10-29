import './App.css';
import React from 'react';
import useDailyCorona from './hooks/useDailyCorona';

function App() {
  const items = useDailyCorona();

  return (
    <ul>
      {items?.map((item, index) => (
        <li key={index}>
          <span>조회 시작 시간: {item.createDt}</span>
          <span>조회 수정 시간: {item.updateDt}</span>
          <span>사망자 수: {item.deathCnt}</span>
        </li>
      ))}
    </ul>
  );
}

export default App;
