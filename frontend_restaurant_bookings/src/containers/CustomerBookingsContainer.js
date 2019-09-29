import React from 'react';
import CustomerSearch from "../components/customers/CustomerSearch.js"
import CustomerForm from "../components/customers/CustomerForm.js"

const CustomerBookingsContainer = (props) => (
  <>
    <CustomerSearch/>
    <CustomerForm
      getCustomerFirstName={props.getCustomerFirstName}
      getCustomerLasttName={props.getCustomerLasttName}
      getCustomerPhoneNumber={props.getCustomerPhoneNumber}
    />
  </>
)

export default CustomerBookingsContainer;
