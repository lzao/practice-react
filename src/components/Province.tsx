import useDailyCorona from '../hooks/useDailyCorona';
import {Table} from 'react-bootstrap';
import React from 'react';

export default function Province() {
  const items = useDailyCorona();

  return (
    <Table className="table table-striped table-dark">
      <thead className="thread-dark">
        <tr>
          <th scope="col">지역</th>
          <th scope="col">확진자수</th>
          <th scope="col">전일대비</th>
          <th scope="col">격리해제수</th>
          <th scope="col">사망자수</th>
          <th scope="col">해외유입수</th>
        </tr>
      </thead>
      <tbody>
        {items?.map((item, index) => (
          <tr key={index}>
            <th scope="row">{item.gubun}</th>
            <th scope="row">{item.defCnt.toLocaleString()}</th>
            <th scope="row">{item.incDec.toLocaleString()}</th>
            <th scope="row">{item.isolClearCnt.toLocaleString()}</th>
            <th scope="row">{item.deathCnt.toLocaleString()}</th>
            <th scope="row">{item.overFlowCnt.toLocaleString()}</th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
