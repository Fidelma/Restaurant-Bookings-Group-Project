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
      bookings: [],
      restaurantTables: [],

      times: ['17:00', '18:00', '19:00'],
      tables: [],
      newCustomers: [],
      newBookings: [],
      backendCustomers: [],
      currentCustomer: null,
      currentTable: null
    }
    this.deleteBooking = this.deleteBooking.bind(this);
    this.saveBooking = this.saveBooking.bind(this);
    this.loadCustomers = this.loadCustomers.bind(this);
    this.loadTables = this.loadTables.bind(this);
    this.loadBookings = this.loadBookings.bind(this);

  }

  componentDidMount(){
    this.loadCustomers()
    this.loadTables()
    this.loadBookings()

  }

  loadCustomers(){
    const request = new Request()
    request.get('http://localhost:8080/customers')
    .then(customers => this.setState({customers: customers._embedded.customers}))
  }

  loadTables(){
    const request2 = new Request()
    request2.get('http://localhost:8080/restaurantTables')
    .then(tables => this.setState({tables: tables._embedded.restaurantTables}))
  }

  loadBookings(){
    const request4 = new Request()
    request4.get('http://localhost:8080/bookings')
    .then(bookings => this.setState({bookings: bookings._embedded.bookings}))
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
    .then(res => res.json())
    .then(returnedCustomer => {
      const currentBooking = {
          date: booking.date,
          time: booking.selectedTime,
          numberOfGuests: booking.guests,
          customer: `http://localhost:8080/customers/${returnedCustomer.id}`,
          restaurantTable: "http://localhost:8080/restaurantTables/tableNumber/" + booking.selectedTable
        }
        const request3 = new Request()
        request3.post('http://localhost:8080/bookings', currentBooking)
      })


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
          <NavBar loadCustomers={this.loadCustomers} loadBookings={this.loadBookings}/>
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
            render={() => <BookingsContainer bookings={this.state.bookings}/>}
          />
          <Route
            path="/customers"
            render={() => <CustomerContainer customers={this.state.customers}/>}

          />
       </Fragment>
      </Router>
    )
  }
}

export default Main;
