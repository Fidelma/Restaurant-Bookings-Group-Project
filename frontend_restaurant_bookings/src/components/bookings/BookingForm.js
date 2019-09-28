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
      <label htmlFor="author">Number of guests:</label>
      <input
        id="guests"
        type="int"
        value={props.guests}
        onChange={handleGuestsChange}
      />
      <select
        onChange={handleTimeChange}>
        <option selected disabled>Pick a time</option>
        {times}
      </select>

      </form>
    </>
  )
}

export default BookingForm;
