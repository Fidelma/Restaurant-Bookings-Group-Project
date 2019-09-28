import React from 'react';
import Customer from './Customer.js';

const CustomerList = (props) => {
  const customerNodes = props.customers.map((customer, index) => {
    return (
      <Customer key={index} customer={customer}/>
    )
  })
  return(
    <>
      {customerNodes}
      {props.deleteBooking}
    </>
  )
}

export default CustomerList;
