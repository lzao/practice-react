import useDailyCorona from '../hooks/useDailyCorona';
import React, {ReactElement} from 'react';
import {Table, TableContainer, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import styled from 'styled-components';

const StyledTableHeadRow = styled(TableRow)`
  background-color: #111111;
`;

const StyledTableHeadCell = styled(TableCell)`
  color: #ffffff !important;
`;

export default function Province(): ReactElement {
  const items = useDailyCorona();

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <StyledTableHeadRow>
            <StyledTableHeadCell>지역</StyledTableHeadCell>
            <StyledTableHeadCell>확진자수</StyledTableHeadCell>
            <StyledTableHeadCell>전일대비</StyledTableHeadCell>
            <StyledTableHeadCell>격리해제수</StyledTableHeadCell>
            <StyledTableHeadCell>사망자수</StyledTableHeadCell>
            <StyledTableHeadCell>해외유입수</StyledTableHeadCell>
          </StyledTableHeadRow>
        </TableHead>
        <TableBody>
          {!items ? (
            <TableRow>
              <TableCell colSpan={6} align={'center'}>
                empty.
              </TableCell>
            </TableRow>
          ) : (
            items.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.gubun}</TableCell>
                <TableCell>{item.defCnt.toLocaleString()}</TableCell>
                <TableCell>{item.incDec.toLocaleString()}</TableCell>
                <TableCell>{item.isolClearCnt.toLocaleString()}</TableCell>
                <TableCell>{item.deathCnt.toLocaleString()}</TableCell>
                <TableCell>{item.overFlowCnt.toLocaleString()}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
