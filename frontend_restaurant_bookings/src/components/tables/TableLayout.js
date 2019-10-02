import React from 'react';
import Table from './Table.js';

const TableLayout = (props) => (
  <>
  <div>
  <Table
    type={props.type}
    tables={props.tables}
    getTableNumber={props.getTableNumber}
    />
  </div>
  </>
)

export default TableLayout;
