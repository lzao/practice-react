import useDailyCorona from '../hooks/useDailyCorona';
import React, {ReactElement} from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  font-size: 0.75em;
  width: 100%;
  background-color: #fff;
  overflow: auto;
  border-collapse: separate;
`;

const Table = styled.table`
  padding: 0 1em;
  width: 30rem;
  font-weight: bold;
  border-collapse: collapse;
  font-size: 1em;

  th {
    vertical-align: middle;
    padding-left: 1rem;
    :first-child {
      position: sticky;
      background-color: #fff;
      left: 0;
    }
  }

  td {
    vertical-align: middle;
    border-radius: 1rem;
    height: 3rem;
    padding-left: 1rem;
    border: 0.3rem solid #fff;
    div {
      width: 100%;
      height: 100%;
      border-radius: 0.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      &.odd {
        background-color: #f5f5f5;
      }
    }
    &:first-child {
      position: sticky;
      left: 0;
      background-color: #fff;
      padding-left: 0;
      border-left: 0.5rem solid #fff;
      &:before {
        content: '';
        position: absolute;
        border-radius: 0.5rem;
        background: #fff;
        width: 200%;
        height: 100%;
        right: 0px;
        top: 0px;
        bottom: 0px;
        z-index: -1;
      }
    }
  }
`;

const TableHeaderRow = styled.tr`
  height: 4em;
  color: #868686;
  text-align: left;
`;

const TableBodyRow = styled.tr`
  height: 4em;
  &:nth-child(odd) {
    background-color: #f5f5f5;
  }
`;

const UpArrow = styled.span`
  display: inline-block;
  border-radius: 1em;
  width: 3.75em;
  background-color: #fedaee;
  color: #eb5374;
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
            <th>오늘확진자</th>
            <th>확진자</th>
            <th>사망자</th>
          </TableHeaderRow>
        </thead>
        <tbody>
          {!items ? (
            <TableBodyRow>
              <td colSpan={4} align={'center'}>
                empty.
              </td>
            </TableBodyRow>
          ) : (
            items.map((item, index) => (
              <TableBodyRow key={index}>
                <td>
                  <div className={index % 2 == 0 ? 'odd' : ''}>{item.gubun}</div>
                </td>
                <td>
                  {item.defCnt.toLocaleString()}명 <UpArrow>{item.incDec.toLocaleString()} ↑</UpArrow>
                </td>
                <td>
                  {item.defCnt.toLocaleString()}명 <UpArrow>{item.incDec.toLocaleString()} ↑</UpArrow>
                </td>
                <td>
                  {item.deathCnt.toLocaleString()}명 <UpArrow>{item.incDec.toLocaleString()} ↑</UpArrow>
                </td>
              </TableBodyRow>
            ))
          )}
        </tbody>
      </Table>
    </TableContainer>
  );
}
