import React from 'react';
import {Link} from 'react-router-dom';

const Booking = (props) =>{

  const url = "/edit"

    return(
      <div className="databox">

        <div className="field">
          <div className="dataLabel">
            Name :
          </div>
          <div className="dataField">
            {props.booking.guest.firstname} {props.booking.guest.lastname}
          </div>
        </div>

        <div className="field">
          <div className="dataLabel">
            Room # :
          </div>
          <div className="dataField">
              {props.booking.room.roomnumber} {props.booking.room.roomtype}
          </div>
        </div>

        <div className="field">
          <div className="dataLabel">
            Chack-in Date :
          </div>
          <div className="dataField">
            {props.booking.bookingdates[0]}
          </div>
        </div>

        <div className="field">
          <div className="dataLabel">
            Check Our :
          </div>
          <div className="dataField">
            {props.booking.bookingdates.slice(-1)[0]}
          </div>
        </div>

        <div className="field">
          <div className="dataLabel">
            Party Size :
          </div>
          <div className="dataField">
            {props.booking.partysize}
          </div>
        </div>

        <div className="field">
          <Link to={url}><button onClick = {() => props.handleEditBooking(props.booking)}>Edit</button></Link>
          <button onClick = { () => { if (window.confirm('Are you sure you wish to delete this item?')) props.handleDeleteBooking(props.booking.bookingid)  } } >Cancel Booking</button>
        </div>
      </div>
    )
}

export default Booking;
