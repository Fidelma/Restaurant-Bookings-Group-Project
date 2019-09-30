import React from "react";

const Booking = (props) => (
  <>
    <div className="booking-wrapper">
    <h4>{props.booking.date}</h4>
    <h4>{props.booking.time}</h4>
    <h4>{props.booking.numberOfGuests}</h4>
    <h4>{props.booking.tableId}</h4>
    <h4>{props.booking.customerId}</h4>
    <button onClick={props.delete}>Delete Booking</button>
    </div>
  </>
)


export default Booking;
