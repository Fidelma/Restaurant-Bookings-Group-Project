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
        {name: "fred"},
        {name: "Alice"},
        {name: "Jane"}
      ],
      bookings: [
        {customer: "fred", partySize: 4},
        {customer: "Alice", partySize: 2},
        {customer: "Jane", partySize: 6}
      ]
    }
  }


  render() {
    return(
      <Router>
       <Fragment>
          <NavBar />
          <Route exact path="/" component={BookingsFormContainer}/>
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
