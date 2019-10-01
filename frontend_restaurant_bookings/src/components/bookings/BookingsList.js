import React from "react";
import Booking from "./Booking.js";

const BookingsList = (props) => {
  const bookingNodes = props.bookings.map((booking, index) => {
    if(booking.date === props.dateToday.toString()){
    return (
      <Booking key={index} booking={booking}/>
    )
  }
  })
  return (
  <>
    {bookingNodes}
    {props.delete}
  </>
  )
}

export default BookingsList;
