import React from 'react';
import Table from './Table.js';

const TableLayout = (props) => (
  <>
  <h3> Table Layout </h3>
  <Table
    tables={props.tables}
    getTableNumber={props.getTableNumber}
    />
  </>
)

export default TableLayout;
