import React from "react";
import TableLayout from '../components/tables/TableLayout.js';
import CustomerBookingsContainer from './CustomerBookingsContainer.js';

const TablesCustomersContainer = (props) => {
  const displayTables = props.displayTables;
  if(displayTables){
    return (
      <TableLayout
        tables={props.tables}
        getTableNumber={props.getTableNumber}
      />
    )
  }else {
    return(
      <CustomerBookingsContainer/>
    )
  }
}

export default TablesCustomersContainer;
