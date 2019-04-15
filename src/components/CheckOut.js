import React from 'react';



const CheckOut = (props) => {

  // Should be returning the unique booking to the edit component... eventually

 if (!props.booking.bill) {
    return <div>
            <h4>{props.booking.guestId}</h4>
            <p>{props.booking.checkinDate}</p>
            <p>{props.booking.checkoutDate}</p>
            <p>{props.booking.roomId}</p>
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
