import React from "react";

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
      <form>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="string"
        value={props.customerFirstName}
        onChange={handleFirstNameChange}/>
      <label htmlFor="last-name">Last Name:</label>
      <input
        type="string"
        value={props.customerLastName}
        onChange={handleLastNameChange}/>
      <label htmlFor="phone-number">Phone Number:</label>
      <input
        type="string"
        value={props.customerPhoneNumber}
        onChange={handlePhoneNumberChange}/>
      </form>
    </>
  )
}

export default CustomerForm;
