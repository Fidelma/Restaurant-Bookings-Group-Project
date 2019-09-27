import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookingsContainer from "../containers/BookingsContainer.js";
import CustomerContainer from "../containers/CustomerContainer.js";
import BookingsFormContainer from "../containers/BookingsFormContainer.js";
import NavBar from "./NavBar.js";


class Main extends Component {
  render() {
    return(
      <Router>
       <Fragment>
          <NavBar />
          <Route exact path="/" component={BookingsFormContainer}/>
          <Route path="/bookings" component={BookingsContainer}/>
          <Route path="/customers" component={CustomerContainer}/>
       </Fragment>
      </Router>
    )
  }
}

export default Main;
