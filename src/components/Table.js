import * as React from 'react';

import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import { PropTypes } from 'prop-types';

export default function TableWrapper({ columns, rows }) {
  return (
    <TableContainer sx={{ maxHeight: '100%' }}>
      <Table >
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows && rows.length != 0 ? (
            rows.map((row) => (
              <TableRow
                hover
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {columns.map((column) => (
                  <TableCell key={column.id}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

TableWrapper.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
};
