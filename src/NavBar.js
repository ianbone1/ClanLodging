import React from 'react';
import {Link} from 'react-router-dom';
// import './NavBar.css'
const NavBar = () =>{
  return(
    <div className="top_nav_wrapper">
      <nav className="topnav">
        <a><Link to="/">Home</Link></a>
        <a><Link to="/bookings">Bookings</Link></a>
        <a><Link to="/guests">Guests</Link></a>
        <a><Link to="/reports">Reports</Link></a>
      </nav>
    </div>
  )
}

export default NavBar;
