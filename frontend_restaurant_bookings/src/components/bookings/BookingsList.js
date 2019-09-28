import React from "react";
import Booking from "./Booking.js";

const BookingsList = (props) => {
  const bookingNodes = props.bookings.map((booking, index) => {
    return (
      <Booking key={index} booking={booking}/>
    )
  })
  return (
  <>
    {bookingNodes}
  </>
  )
}

export default BookingsList;
