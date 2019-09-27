import React, { Component } from 'react';
import BookingForm from '../components/bookings/BookingForm.js';
import TableLayout from '../components/tables/TableLayout.js';
import CustomerBookingsContainer from './CustomerBookingsContainer.js';

class BookingsFormContainer extends Component {
  render(){
    return(
      <>
        <h2>Bookings form container</h2>
        <BookingForm />
        <TableLayout />
        <CustomerBookingsContainer />
      </>
    )
  }
}

export default BookingsFormContainer;
