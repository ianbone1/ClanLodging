import React from 'react';

import "./Guest.css"

const Staff =(props) => {
  return (

      <div className="dataBox">

      <div className="dataDisplay">
         {props.staff.firstname} {props.lastname}
      </div>

      <div className="dataDisplay">
         {props.staff.addressline1}
      </div>

      <div className="dataDisplay">
         {props.staff.town}
      </div>
      <div className="dataDisplay">
         {props.staff.postcode}
      </div>

      <div className="dataDisplay">
       {props.staff.email}
      </div>

      <div className="dataDisplay">
       {props.staff.phone}
      </div>

      <div className="dataDisplay">
       {props.staff.position}
      </div>

      <div className="dataDisplay">
      <button className="buttonControl" onClick = { () => { if (window.confirm('Are you sure you wish to remove this staff member?'))
      props.handleDeleteStaff(props.staff.staffid)  } }
      >Remove Member</button>
      </div>
      </div>
  )
}
export default Staff;
