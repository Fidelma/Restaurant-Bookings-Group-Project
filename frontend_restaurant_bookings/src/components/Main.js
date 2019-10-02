import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookingsContainer from "../containers/BookingsContainer.js";
import CustomerContainer from "../containers/CustomerContainer.js";
import BookingsFormContainer from "../containers/BookingsFormContainer.js";
import NavBar from "./NavBar.js";
import Request from "./services/restaurantServices.js"



class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: [],
      bookings: [
        {id: 1, date: "1/11/2019", time: 11.15, numberOfGuests: 2, tableId: 2, customerId: 3, receiptId: 1},
        {id: 2, date: "2/12/2019", time: 12.30, numberOfGuests: 6, tableId: 1, customerId: 1, receiptId: 2},
        {d: 3, date: "3/12/2019", time: 20.45, numberOfGuests: 4, tableId: 8, customerId: 4, receiptId: 3}
      ],
      restaurantTables: [
        {id:1, numberOfChairs: 2, number: 1, type: "small"},
        {id:2, numberOfChairs: 4, number: 2, type: "medium"},
        {id:3, numberOfChairs: 8, number: 3, type: "large"},
        {id:4, numberOfChairs: 4, number: 4, type: "medium"},
      ],

      times: ['17:00', '18:00', '19:00'],
      tables: [1,2,3],
      newCustomers: [],
      newBookings: [],
      backendCustomers: []
    }
    this.deleteBooking = this.deleteBooking.bind(this);
    this.saveBooking = this.saveBooking.bind(this);

  }

  componentDidMount(){
    const request = new Request()
    request.get('http://localhost:8080/customers')
    .then(customers => this.setState({customers: customers}))
    request.get('http://localhost:8080/tables')
    .then(tables => this.setState({tables: tables}))






  }

  saveBooking(customer, booking){
    const newCustomers = [...this.state.newCustomers];
    const newBookings = [...this.state.newBookings];
    newCustomers.push(customer);
    newBookings.push(booking);
    this.setState({newCustomers: newCustomers});
    this.setState({newBookings: newBookings});
    const request = new Request()
    request.post('http://localhost:8080/customers', customer)
    const currentCustomer = request.get('http://localhost:8080/customers/name' + customer.firstName '/' + customer.lastName)
    const currentBooking = {
      date: booking.date,
      time: booking.selectedTime,
      numberOfGuests: booking.guests,
      customer: currentCustomer,
      restaurantTable: booking.selectedTable
    }
    request.post('http://localhost:8080/bookings', )
  }

  deleteBooking(id){
    this.setState(prevState => ({
      booking: prevState.booking.filter(el => el != id )
    }));
  }

  render() {
    return(
      <Router>
       <Fragment>
          <NavBar />
          <Route
            exact path="/"
            render={() => <BookingsFormContainer
            times={this.state.times}
            tables={this.state.tables}
            saveBooking={this.saveBooking}
            customers={this.state.customers}/>}
          />
          <Route
            path="/bookings"
            render={() => <BookingsContainer bookings={this.state.bookings} delete={this.deleteBooking.bind(this)}/>}
          />
          <Route
            path="/customers"
            render={() => <CustomerContainer customers={this.state.customers._embedded.customers}/>}

          />
       </Fragment>
      </Router>
    )
  }
}

export default Main;
