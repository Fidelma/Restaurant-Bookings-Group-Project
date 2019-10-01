import React from "react";
import BookingsList from "../components/bookings/BookingsList";
import BookingsDateSearch from "../components/bookings/BookingsDateSearch";

const BookingsContainer = (props) => (
  <>
  <h4>Bookings Container</h4>
    <BookingsDateSearch/>
    <BookingsList bookings={props.bookings} delete={props.delete} dateToday={props.dateToday}/>
  </>

)
export default BookingsContainer;
