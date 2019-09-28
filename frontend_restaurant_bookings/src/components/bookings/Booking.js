import React from "react";

const Booking = (props) => (
  <>
    <h4>{props.booking.customer}</h4>
    <h4>{props.booking.partySize}</h4>
  </>
)

export default Booking;
