import React from "react";
import BookingsList from "../components/bookings/BookingsList";
import BookingsDateSearch from "../components/bookings/BookingsDateSearch";

const BookingsContainer = (props) => (
  <>
    <BookingsDateSearch/>
    <BookingsList bookings={props.bookings} delete={props.delete}/>
  </>

)
export default BookingsContainer;
