import React from 'react';



const CheckOut = (props) => {

 if (!props.booking.bill) {
    return <div>
            <h4>{props.booking.guest.firstname} {props.booking.guest.lastname}</h4>
            <p>Checked in on: {props.booking.bookingdates[0]}</p>
            <p>Checkout on: {props.booking.bookingdates.slice(-1)[0]}</p>
            <p>Room: {props.booking.room.roomnumber}</p>
            <p>Bill not settled</p>
            <button >Check Out</button>
            <button>Cancel</button>
          </div>
  }
    return(

      <div>
        <h4>{props.booking.guestId}</h4>
        <p>{props.booking.checkinDate}</p>
        <p>{props.booking.checkoutDate}</p>
        <p>{props.booking.roomId}</p>
        <p>Bill settled</p>
        <button >Check Out</button>
        <button>Cancel</button>

      </div>
    )
}

export default CheckOut;
