import React from 'react';
import {Link} from 'react-router-dom';


const Booking = (props) =>{

  const url = "edit/"

    return(
      <div>
        <p>Name: {props.booking.guest.firstName} {props.booking.guest.lastName}</p>
        <p>Room: {props.booking.room.roomNumber}</p>
        <p>Checkin Date: {props.booking.bookingDates[0]}</p>
        <p>Checkout Date: {props.booking.bookingDates.slice(-1)[0]}</p>
        <p>Party size: {props.booking.partySize}</p>
        <Link to = {url}><button onClick = {() => props.handleEdit(props.booking.bookingID)}>Edit</button></Link>
        <button onClick = { () => { if (window.confirm('Are you sure you wish to delete this item?')) props.handleDelete(props.booking.bookingID)  } } >Cancel Booking</button>
      </div>
    )
}

export default Booking;
