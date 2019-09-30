import React from 'react';
import CustomerList from '../components/customers/CustomerList.js';
import CustomerSearch from '../components/customers/CustomerSearch.js';

const CustomerContainer = (props) => (
  <>
    <h3>Customer Container</h3>
    <CustomerSearch/>
    <CustomerList customers={props.customers}/>
  </>
)

export default CustomerContainer;
