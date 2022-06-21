import useDailyCorona from '../hooks/useDailyCorona';
import React, {ReactElement} from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  font-size: 0.75em;
  width: 100%;
`;

const Table = styled.table`
  padding: 0 1em;
  width: 100%;
  font-weight: bold;
  border-collapse: collapse;
  text-align: center;
  font-size: 1em;

  th {
    color: #ffffff;
    vertical-align: middle;
    &:nth-child(1) {
      width: 10%;
    }
    &:nth-child(2),
    &:nth-child(4) {
      width: 25%;
    }
    &:nth-child(3),
    &:nth-child(5) {
      width: 15%;
    }
  }

  td {
    vertical-align: middle;
  }
`;

const TableHeaderRow = styled.tr`
  height: 4em;
  background-color: #00a9c7;
`;

const TableBodyRow = styled.tr`
  height: 4em;
  &:nth-child(odd) {
    background-color: #c4e8ee;
  }
`;

const UpArrow = styled.span`
  display: inline-block;
  border-radius: 1em;
  width: 3.75em;
  background-color: #3ad1ff;
  padding: 0.5em 0;
  text-align: center;
`;

export default function Province(): ReactElement {
  const items = useDailyCorona();

  return (
    <TableContainer>
      <Table>
        <thead>
          <TableHeaderRow>
            <th>지역</th>
            <th>확진자수</th>
            <th>↑</th>
            <th>사망자수</th>
            <th>↑</th>
          </TableHeaderRow>
        </thead>
        <tbody>
          {!items ? (
            <TableBodyRow>
              <td colSpan={5} align={'center'}>
                empty.
              </td>
            </TableBodyRow>
          ) : (
            items.map((item, index) => (
              <TableBodyRow key={index}>
                <td>{item.gubun}</td>
                <td>{item.defCnt.toLocaleString()}명</td>
                <td>
                  <UpArrow>{item.incDec.toLocaleString()}</UpArrow>
                </td>
                <td>{item.deathCnt.toLocaleString()}명</td>
                <td>
                  <UpArrow>{item.incDec.toLocaleString()}</UpArrow>
                </td>
              </TableBodyRow>
            ))
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
}
