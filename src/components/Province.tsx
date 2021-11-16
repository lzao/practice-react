import useDailyCorona from '../hooks/useDailyCorona';
import React, {ReactElement} from 'react';
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core';

export default function Province(): ReactElement {
  const items = useDailyCorona();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>지역</TableCell>
            <TableCell>확진자수</TableCell>
            <TableCell>전일대비</TableCell>
            <TableCell>격리해제수</TableCell>
            <TableCell>사망자수</TableCell>
            <TableCell>해외유입수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.gubun}</TableCell>
              <TableCell>{item.defCnt.toLocaleString()}</TableCell>
              <TableCell>{item.incDec.toLocaleString()}</TableCell>
              <TableCell>{item.isolClearCnt.toLocaleString()}</TableCell>
              <TableCell>{item.deathCnt.toLocaleString()}</TableCell>
              <TableCell>{item.overFlowCnt.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
