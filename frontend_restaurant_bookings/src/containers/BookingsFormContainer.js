import React, { Component } from 'react';
import BookingForm from '../components/bookings/BookingForm.js';
import TablesCustomersContainer from './TablesCustomersContainer.js';


class BookingsFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: null,
      guests: '',
      selectedTime: '',
      selectedTable: '',
      displayTables: true


    }
    this.getDate = this.getDate.bind(this);
    this.getGuests = this.getGuests.bind(this);
    this.getTime = this.getTime.bind(this);
    this.getTableNumber = this.getTableNumber.bind(this);
    this.changeToCustomerComponent = this.changeToCustomerComponent.bind(this);
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


  render(){
    return(
      <>
        <h2>Bookings form container</h2>
        <BookingForm
          getDate={this.getDate}
          guests={this.state.guests}
          getGuests={this.getGuests}
          times={this.props.times}
          getTime={this.getTime}
          selectedTable={this.state.selectedTable}
          changeToCustomerComponent={this.changeToCustomerComponent}
        />
        <TablesCustomersContainer
          displayTables={this.state.displayTables}
          tables={this.props.tables}
          getTableNumber={this.getTableNumber}/>
      </>
    )
  }
}

export default BookingsFormContainer;
