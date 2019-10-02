import React from "react";
import TableLayout from '../components/tables/TableLayout.js';
import CustomerBookingsContainer from './CustomerBookingsContainer.js';
import './TablesCustomersContainer.css'

const TablesCustomersContainer = (props) => {
  const displayTables = props.displayTables;
  if(displayTables){
    return (
      <TableLayout
        type={props.type}
        tables={props.tables}
        getTableNumber={props.getTableNumber}
      />
    )
  }else {
    return(
      <CustomerBookingsContainer
        getCustomerFirstName={props.getCustomerFirstName}
        customerFirstName={props.customerFirstName}
        getCustomerLasttName={props.getCustomerLasttName}
        customerLastName={props.customerLastName}
        getCustomerPhoneNumber={props.getCustomerPhoneNumber}
        customerPhoneNumber={props.customerPhoneNumber}
        customers={props.customers}
      />
    )
  }
}

export default TablesCustomersContainer;
