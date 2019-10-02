import React from "react";
import "./Booking.css"

const Booking = (props) => (
  <>
    <div className="booking-wrapper">
    <h4>Date {props.booking.date}</h4>
    <h4>Time {props.booking.time}</h4>
    <h4>Number of guests {props.booking.numberOfGuests}</h4>
    <h4>Table {props.booking.tableId}</h4>
    <h4>{props.booking.customerId}</h4>
    <button className="delete" onClick={props.delete}>Delete</button>
    </div>
  </>
)


export default Booking;
