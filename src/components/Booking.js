import React from 'react';
import {Link} from 'react-router-dom';


const Booking = (props) =>{

  // Should be returning the unique booking to the edit component... eventually
    const url = `/bookings/edit/${props.booking.key}`;

    return(
      <div>
        <p>{props.booking.guestId}</p>
        <p>{props.booking.checkinDate}</p>
        <p>{props.booking.checkoutDate}</p>
        <p>{props.booking.roomId}</p>
        <Link to={url}><button>Edit</button></Link>
        <button>Check In</button>
        <button>Cancel</button>

      </div>
    )
}

export default Booking;
