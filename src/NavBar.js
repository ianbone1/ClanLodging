import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css'
const NavBar = () =>{
  return(
    <div className="top_nav_wrapper">
      <nav className="topnav">
        <Link to="/"><p>Home</p></Link>
        <Link to="/bookingslocal"><p>Bookings</p></Link>
        <Link to="/guests"><p>Guests</p></Link>
        <Link to="/staffs"><p>Staff</p></Link>
        <Link to="/reports"><p>Reports</p></Link>
        <Link to="/checkinout"><p>Check In/Out</p></Link>
      </nav>
    </div>
  )
}

export default NavBar;
