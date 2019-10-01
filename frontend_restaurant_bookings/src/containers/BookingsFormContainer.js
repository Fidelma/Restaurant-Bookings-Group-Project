import React, { Component } from 'react';
import BookingForm from '../components/bookings/BookingForm.js';
import TablesCustomersContainer from './TablesCustomersContainer.js';


class BookingsFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      guests: '',
      selectedTime: '',
      selectedTable: '',
      displayTables: true,
      customerFirstName: '',
      customerLastName: '',
      customerPhoneNumber: ''


    }
    this.getDate = this.getDate.bind(this);
    this.getGuests = this.getGuests.bind(this);
    this.getTime = this.getTime.bind(this);
    this.getTableNumber = this.getTableNumber.bind(this);
    this.changeToCustomerComponent = this.changeToCustomerComponent.bind(this);
    this.getCustomerFirstName = this.getCustomerFirstName.bind(this);
    this.getCustomerLasttName = this.getCustomerLasttName.bind(this);
    this.getCustomerPhoneNumber = this.getCustomerPhoneNumber.bind(this);
    this.handleBookingSave = this.handleBookingSave.bind(this);
  }

  getDate(date){
    return(
      this.setState({date: date})
    )
  }
  getGuests(number){
    return(
      this.setState({guests: number})
    )
  }

  getTime(time){
    return(
      this.setState({selectedTime: time})
    )
  }

  getTableNumber(number){
    return(
      this.setState({selectedTable: number += 1})
    )
  }

  changeToCustomerComponent(){
    return(
      this.setState({displayTables: false})
    )
  }

  getCustomerFirstName(name){
    return(
      this.setState({customerFirstName: name})
    )
  }

  getCustomerLasttName(name){
    return(
      this.setState({customerLastName: name})
    )
  }

  getCustomerPhoneNumber(number){
    return(
      this.setState({customerPhoneNumber: number})
    )
  }

  handleBookingSave(){
    const customer = {
      firstName: this.state.customerFirstName,
      lastName: this.state.customerLastName,
      phoneNumber: this.state.customerPhoneNumber
    }
    const booking = {
      date: this.state.date,
      guests: this.state.guests,
      selectedTime: this.state.selectedTime,
      selectedTable: this.state.selectedTable
    }
    this.props.saveBooking(customer, booking);
    this.setState({
      date: new Date(),
      guests: '',
      selectedTime: '',
      selectedTable: '',
      customerFirstName: '',
      customerLastName: '',
      customerPhoneNumber: ''})
  }


  render(){
    return(
      <>
        <h2>Bookings form container</h2>
        <BookingForm
          getDate={this.getDate}
          date={this.state.date}
          guests={this.state.guests}
          getGuests={this.getGuests}
          times={this.props.times}
          selectedTime={this.state.selectedTime}
          getTime={this.getTime}
          selectedTable={this.state.selectedTable}
          changeToCustomerComponent={this.changeToCustomerComponent}
          handleBookingSave={this.handleBookingSave}
        />
        <TablesCustomersContainer
          displayTables={this.state.displayTables}
          tables={this.props.tables}
          getTableNumber={this.getTableNumber}
          getCustomerFirstName={this.getCustomerFirstName}
          customerFirstName={this.state.customerFirstName}
          getCustomerLasttName={this.getCustomerLasttName}
          customerLastName={this.state.customerLastName}
          getCustomerPhoneNumber={this.getCustomerPhoneNumber}
          customerPhoneNumber={this.state.customerPhoneNumber}
          customers={this.props.customers}
        />
      </>
    )
  }
}

export default BookingsFormContainer;
