import React from 'react';
import {Link} from 'react-router-dom';
import './Booking.css';

const Booking = (props) =>{

  const url = "/edit"

    return(

      <div className="dataBox">
          <div className="dataDisplay">
            Name : {props.booking.guest.firstname} {props.booking.guest.lastname}
          </div>

          <div className="dataDisplay">
            Room # : {props.booking.room.roomnumber} {props.booking.room.roomtype}
          </div>

          <div className="dataDisplay">
            Chack-in Date : {props.booking.bookingdates[0]}
          </div>

          <div className="dataDisplay">
            Check Our : {props.booking.bookingdates.slice(-1)[0]}
          </div>

          <div className="dataDisplay">
            Party Size : {props.booking.partysize}
          </div>

        <div className="dataDisplay">
          <Link to={url}><button className="buttonControl" onClick = {() => props.handleEditBooking(props.booking)}>Edit</button></Link>
          <button className="buttonControl" onClick = { () => { if (window.confirm('Are you sure you wish to delete this item?')) props.handleDeleteBooking(props.booking.bookingid)  } } >Cancel Booking</button>
        </div>
      </div>

    )
}

export default Booking;
