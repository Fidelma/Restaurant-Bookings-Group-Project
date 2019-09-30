import React from 'react';
import CustomerSearch from "../components/customers/CustomerSearch.js"
import CustomerForm from "../components/customers/CustomerForm.js"

const CustomerBookingsContainer = (props) => (
  <>
    <CustomerSearch/>
    <CustomerForm
      getCustomerFirstName={props.getCustomerFirstName}
      customerFirstName={props.customerFirstName}
      getCustomerLasttName={props.getCustomerLasttName}
      customerLastName={props.customerLastName}
      getCustomerPhoneNumber={props.getCustomerPhoneNumber}
      customerPhoneNumber={props.customerPhoneNumber}
    />
  </>
)

export default CustomerBookingsContainer;
