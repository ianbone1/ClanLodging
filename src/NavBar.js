import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () =>{
  return(
    <header>
      <ul>
        <li>
          <Link>Bookings</Link>
        </li>
      </ul>
    </header>
  )
}

export default NavBar;
