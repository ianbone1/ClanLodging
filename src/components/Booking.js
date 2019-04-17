import React from 'react';
import {Link} from 'react-router-dom';


const Booking = (props) =>{

  const url = "/edit"

    return(
      <div>
        <p>Name: {props.booking.guest.firstname} {props.booking.guest.lastname}</p>
        <p>Room: {props.booking.room.roomnumber}</p>
        <p>Checkin Date: {props.booking.bookingdates[0]}</p>
        <p>Checkout Date: {props.booking.bookingdates.slice(-1)[0]}</p>
        <p>Party size: {props.booking.partysize}</p>
        <Link to={url}><button onClick = {() => props.handleEditBooking(props.booking)}>Edit</button></Link>
        <button onClick = { () => { if (window.confirm('Are you sure you wish to delete this item?')) props.handleDeleteBooking(props.booking.bookingid)  } } >Cancel Booking</button>
      </div>
    )
}

export default Booking;
