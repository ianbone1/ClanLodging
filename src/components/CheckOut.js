import React from 'react';

const CheckOut = (props) => {

 if (!props.booking.checkedIn) {
   const rate = props.booking.room.rate;
   const nights = props.booking.bookingdates;
   const stay = nights.length-1
   const bill = rate * stay;
    return <div>
            <h4>{props.booking.guest.firstname} {props.booking.guest.lastname}</h4>
            <p>Checked in on: {props.booking.bookingdates[0]}</p>
            <p>Checkout on: {props.booking.bookingdates.slice(-1)[0]}</p>
            <p>Room: {props.booking.room.roomnumber}</p>
            <p>Bill: £{bill}</p>
            <button onClick = {() => { props.handleCheckOut(props.booking.bookingid) }}>Check Out</button>
          </div>
  }
}

export default CheckOut;
