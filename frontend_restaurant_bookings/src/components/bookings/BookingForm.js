import React from 'react';
import DateSelector from "./DateSelector.js";

const BookingForm = (props) => (
  <>
    <form>
    <DateSelector getDate={props.getDate}/>
    </form>
  </>
)

export default BookingForm;
