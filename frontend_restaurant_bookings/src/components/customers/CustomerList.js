import React from 'react';
import Customer from './Customer.js';
import './CustomerList.css'

const CustomerList = (props) => {
  const customerNodes = props.customers.map((customer, index) => {
    return (
      <Customer key={index} customer={customer}/>
    )
  })
  return(
    <>
      {customerNodes}

    </>
  )
}

export default CustomerList;
