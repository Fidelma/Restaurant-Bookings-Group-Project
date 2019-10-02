import React from "react";
import {Link} from "react-router-dom";

const NavBar = (props) => (

  <ul>
  <li>
    <Link to="/">Create Booking</Link>
  </li>
  <li>
    <Link onClick={props.loadBookings} to="/bookings">Bookings</Link>
  </li>
  <li>
    <Link onClick={props.loadCustomers} to="/customers">Customers</Link>
  </li>
  </ul>
)

export default NavBar;
