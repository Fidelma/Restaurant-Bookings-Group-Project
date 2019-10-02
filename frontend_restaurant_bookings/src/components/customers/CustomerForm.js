import React from "react";
import "./CustomerForm.css"

const CustomerForm = (props) => {

  function handleFirstNameChange(event){
    props.getCustomerFirstName(event.target.value);
  }

  function handleLastNameChange(event){
    props.getCustomerLasttName(event.target.value);
  }

  function handlePhoneNumberChange(event){
    props.getCustomerPhoneNumber(event.target.value);
  }

  return (
    <>
      <div className="customer-form">
        <form>
          <label className="labels" htmlFor="first-name">First Name</label>
          <input
            className="inputs"
            type="string"
            value={props.customerFirstName}
            onChange={handleFirstNameChange}/>
          <label className="labels" htmlFor="last-name">Last Name</label>
          <input
            className="inputs"
            type="string"
            value={props.customerLastName}
            onChange={handleLastNameChange}/>
          <label className="labels" htmlFor="phone-number">Phone Number</label>
          <input
            className="inputs"
            type="string"
            value={props.customerPhoneNumber}
            onChange={handlePhoneNumberChange}/>
        </form>
      </div>
    </>
  )
}

export default CustomerForm;
