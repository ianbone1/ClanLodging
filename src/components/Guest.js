import React from 'react';
import "./Guest.css"

const Guest =(props) => {
  return (
   <div className="dataBox">

   <div className="dataDisplay">
      {props.guest.firstname} {props.guest.lastname}
   </div>

   <div className="dataDisplay">
      {props.guest.addressline1}
   </div>

   <div className="dataDisplay">
      {props.guest.town}
   </div>
   <div className="dataDisplay">
      {props.guest.postcode}
   </div>

   <div className="dataDisplay">
    {props.guest.email}
   </div>

   <div className="dataDisplay">
    {props.guest.phone}
   </div>

   <div className="dataDisplay">
   <button className="buttonControl" onClick = { () => { if (window.confirm('Are you sure you wish to remove this guest?')) props.handleDeleteGuest(props.guest.guestid)  } }>Remove</button>
   </div>
</div>
  )
}
export default Guest;
