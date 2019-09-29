import React from 'react';
import DateSelector from "./DateSelector.js";

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

  return(
    <>
      <form>
      <DateSelector getDate={props.getDate}/>
      <label htmlFor="guests">Number of guests:</label>
      <input
        id="guests"
        type="number"
        value={props.guests}
        onChange={handleGuestsChange}
      />
      <select
        onChange={handleTimeChange}>
        <option selected disabled>Pick a time</option>
        {times}
      </select>
      <label htmlFor="selected-table">Table Number</label>
      <input
        id="table"
        type="int"
        value={props.selectedTable}
      />

      </form>
    </>
  )
}

export default BookingForm;
