import React from "react";
import BookingsList from "../components/bookings/BookingsList";
import BookingsDateSearch from "../components/bookings/BookingsDateSearch";
import './BookingsContainer.css'

const BookingsContainer = (props) => (
  <>
    <BookingsDateSearch/>
    <BookingsList bookings={props.bookings} delete={props.delete}/>
  </>

)
export default BookingsContainer;
