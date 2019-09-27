import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookingsContainer from "../containers/BookingsContainer.js";
import CustomerContainer from "../containers/CustomerContainer.js";


class Main extends Component {
  render() {
    return(
      <Router>
       <Fragment>
          <Route path="/bookings" component={BookingsContainer}/>
          <Route path="/customers" component={CustomerContainer}/>
       </Fragment>
      </Router>
    )
  }
}
 export default Main;
