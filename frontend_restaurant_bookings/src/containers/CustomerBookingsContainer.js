import React from 'react';
import CustomerSearch from "../components/customers/CustomerSearch.js"
import CustomerForm from "../components/customers/CustomerForm.js"
<<<<<<< HEAD
import './CustomerBookingsContainer.css'

const CustomerBookingsContainer = (props) => (
  <>
    <div>    
=======
import CustomerList from "../components/customers/CustomerList.js"

const CustomerBookingsContainer = (props) => (
  <>
>>>>>>> 8013309bb7fe6002a8b2473537e243e495404609
    <CustomerForm
      getCustomerFirstName={props.getCustomerFirstName}
      customerFirstName={props.customerFirstName}
      getCustomerLasttName={props.getCustomerLasttName}
      customerLastName={props.customerLastName}
      getCustomerPhoneNumber={props.getCustomerPhoneNumber}
      customerPhoneNumber={props.customerPhoneNumber}
    />
<<<<<<< HEAD
    <CustomerSearch/>
    </div>
=======
    <CustomerSearch customers={props.customers}/>
>>>>>>> 8013309bb7fe6002a8b2473537e243e495404609
  </>
)

export default CustomerBookingsContainer;
