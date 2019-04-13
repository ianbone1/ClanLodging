import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
  return(
    <header>
    <ul>

      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/bookings">Bookings</Link>
      </li>

      <li>
        <Link to="/guests">Guests</Link>
      </li>

      <li>
        <Link to="/reports">Reports</Link>
      </li>

    </ul>
    </header>
  )
}

export default NavBar;
