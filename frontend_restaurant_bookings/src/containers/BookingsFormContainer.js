import React, { Component } from 'react';
import BookingForm from '../components/bookings/BookingForm.js';
import TableLayout from '../components/tables/TableLayout.js';
import CustomerBookingsContainer from './CustomerBookingsContainer.js';

class BookingsFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: null
    }
    this.getDate = this.getDate.bind(this);
  }

  getDate(date){
    return(
      this.setState({date: date})
    )

  }

  render(){
    return(
      <>
        <h2>Bookings form container</h2>
        <BookingForm getDate={this.getDate}/>
        <TableLayout />
        <CustomerBookingsContainer />
      </>
    )
  }
}

export default BookingsFormContainer;
