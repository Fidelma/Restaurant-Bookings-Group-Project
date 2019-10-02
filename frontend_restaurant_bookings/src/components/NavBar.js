import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = (props) => (
  <div className="nav-wrapper">
        <p className="box">
          <Link className="link" style={{ textDecoration: 'none' }} to="/">Create Booking</Link>
        </p>
        <p className="box">
          <Link className="link" onClick={props.loadBookings} style={{ textDecoration: 'none' }} to="/bookings">Bookings</Link>
        </p>
        <p className="box">
          <Link className="link" onClick={props.loadCustomers} style={{ textDecoration: 'none' }} to="/customers">Customers</Link>
        </p>
  </div>

)

export default NavBar;
