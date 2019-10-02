import React from 'react';
import CustomerSearch from "../components/customers/CustomerSearch.js"
import CustomerForm from "../components/customers/CustomerForm.js"
import CustomerList from "../components/customers/CustomerList.js"
import "./CustomerBookingsContainer.css"

const CustomerBookingsContainer = (props) => (
  <>
    <div className="customer-wrapper">
      <CustomerForm
        getCustomerFirstName={props.getCustomerFirstName}
        customerFirstName={props.customerFirstName}
        getCustomerLasttName={props.getCustomerLasttName}
        customerLastName={props.customerLastName}
        getCustomerPhoneNumber={props.getCustomerPhoneNumber}
        customerPhoneNumber={props.customerPhoneNumber}
      />
    </div>
    <div>
    <CustomerSearch customers={props.customers}/>
    </div>
  </>
)

export default CustomerBookingsContainer;
