import React from 'react';

const Booking = (props) =>{

    return(
      <div>
        <p>{props.booking.guestId}</p>
        <p>{props.booking.checkinDate}</p>
        <p>{props.booking.checkoutDate}</p>
        <p>{props.booking.roomId}</p>
        <button>Edit</button>
        <button>Check In</button>
        <button>Cancel</button>
      </div>
    )
}

export default Booking;
