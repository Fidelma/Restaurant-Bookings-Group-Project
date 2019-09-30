import React from 'react';

const Customer = (props) => (
  <>
  <div className="booking-wrapper">
  <h3>{props.customer.firstName}</h3>
  <h3>{props.customer.lastName}</h3>
  <h3>{props.customer.phoneNumber}</h3>
  <h3>{props.customer.frequency}</h3>
    </div>
  </>

)

export default Customer;
