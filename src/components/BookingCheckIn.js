import React from 'react';
import {Link} from 'react-router-dom';


const BookingCheckIn = (props) => {

  // Should be returning the unique booking to the edit component... eventually
  const url = `/bookings/edit/${props.booking.key}`;


    return(

      <div>
        <h4>{props.booking.guestid}</h4>
        <p>{props.booking.checkinDate}</p>
        <p>{props.booking.checkoutDate}</p>
        <p>{props.booking.roomid}</p>
        <Link to={url}><button>Edit</button></Link>
        <button >Check In</button>
        <button>Cancel</button>

      </div>
    )
}

export default BookingCheckIn;
