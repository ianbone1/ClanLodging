import React from 'react';
import './Booking.css';

const CheckOut = (props) => {

 if (!props.booking.checkedIn) {
   const rate = props.booking.room.rate;
   const nights = props.booking.bookingdates;
   const stay = nights.length-1
   const bill = rate * stay;
    return (
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
            Bill: £{bill}
          </div>

        <div className="dataDisplay">
        <button className="buttonControl" onClick = {() => { props.handleCheckOut(props.booking.bookingid) }}>Check Out</button>
        </div>
      </div>
    )
  }
}

export default CheckOut;
