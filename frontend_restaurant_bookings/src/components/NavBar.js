import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = () => (
  <div className="nav-wrapper">
    <ul>
      <li>
        <Link to="/">Create Booking</Link>
      </li>
      <li>
        <Link to="/bookings">Bookings</Link>
      </li>
      <li>
        <Link to="/customers">Customers</Link>
      </li>
    </ul>
  </div>
)

export default NavBar;
