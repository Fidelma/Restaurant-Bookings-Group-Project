import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookingsContainer from "../containers/BookingsContainer.js";
import CustomerContainer from "../containers/CustomerContainer.js";
import BookingsFormContainer from "../containers/BookingsFormContainer.js";
import NavBar from "./NavBar.js";



class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      customers: [
        {id: 1, phoneNumber: "07895236657", firstName: "Richard", lastName: "Trist", frequency: 1 },
        {id: 2, phoneNumber: "07895236684", firstName: "Crawford", lastName: "Brown", frequency: 3},
        {id: 3, phoneNumber: "07895236686", firstName: "Fidelma", lastName: "Beagan", frequency: 1},
        {id: 4, phoneNumber: "07895236686", firstName: "Mateusz", lastName: "Michniewski", frequency: 2},
      ],
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
      ]
    }
    this.deleteBooking = this.deleteBooking.bind(this);

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
          <Route exact path="/" component={BookingsFormContainer}/>
          <Route
            path="/bookings"
            render={() => <BookingsContainer bookings={this.state.bookings} delete={this.deleteBooking.bind(this)}/>}
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
