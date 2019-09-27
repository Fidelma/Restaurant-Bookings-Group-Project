import React, {Component, Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BookingsContainer from "../containers/BookingsContainer.js";


class Main extends Component {
  render() {
    return(
      <Router>
       <Fragment>
          <Route path="/bookings" component={BookingsContainer}/>
       </Fragment>
      </Router>
    )
  }
}
 export default Main;
