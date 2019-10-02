import React from 'react';
import DateSelector from "./DateSelector.js";
import './BookingForm.css'

const BookingForm = (props) => {

  const times = props.times.map((time, index) => {
    return <option key={index} value={time}>{time}</option>
  })

  function handleGuestsChange(event){
    props.getGuests(event.target.value);
  }

  function handleTimeChange(event){
    props.getTime(event.target.value);
  }

  function customerComponent(event){
    event.preventDefault();
    props.changeToCustomerComponent();
  }

  function tablesComponent(event){
    event.preventDefault();
    props.changeToTablesComponent();
  }

  function handleBookingSaveCall(event){
    props.handleBookingSave();

  }

  return(
    <>
      <div className="form-wrapper">
      <form id="booking-form">
      <DateSelector className="date-selector" getDate={props.getDate} date={props.date}/>
      <label className="number-of-guests-label" htmlFor="guests">Number of guests:</label>
      <input
        className="number-of-guests"
        id="guests"
        type="number"
        value={props.guests}
        onChange={handleGuestsChange}
      />
      <select
        className="pick-table-select"
        onChange={handleTimeChange}>
        <option className="pick-table" selected disabled>Pick a time</option>
        {times}
      </select>
      <label className="tables-label" htmlFor="selected-table">Table Number</label>
      <input
        readonly
        className="tables"
        onClick={tablesComponent}
        id="table"
        type="int"
        value={props.selectedTable}
      />
      <button className="customer" onClick={customerComponent}>Customer details</button>

      <button className="save" onClick={handleBookingSaveCall}>Save</button>
      </form>
      </div>
    </>
  )
}

export default BookingForm;
