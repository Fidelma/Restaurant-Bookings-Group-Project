import React from "react";
import BookingsList from "../components/bookings/BookingsList";
import BookingsDateSearch from "../components/bookings/BookingsDateSearch";


const BookingsContainer = (props) => (
  <>
  <h4>BookingsContainer</h4>
    <BookingsDateSearch/>
    <BookingsList/>
  </>

)
export default BookingsContainer;
