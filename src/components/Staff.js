
import React from 'react';
import "./DataForm.css"

const Staff =(props) => {
  return (
    <div className="databox">
      <div className="field">
        <div className="dataLabel">
          Name :
        </div>
      <div className="dataField">
        {props.staff.firstname}
        {props.staff.lastname}
    </div>
  </div>

    <div className="field">
      <div className="dataLabel">
        Address :
      </div>
      <div className="dataField">
          {props.staff.addressline1}
      </div>
    </div>

    <div className="field">
      <div className="dataLabel">
        Town :
        </div>
        <div className="dataField">
          {props.staff.town}
        </div>
    </div>

    <div className="field">
      <div className="dataLabel">
        Postcode :
      </div>
      <div className="dataField">
          {props.staff.postcode}
      </div>
    </div>

    <div className="field">
      <div className="dataLabel">
        Email :
      </div>
      <div className="dataField">
        {props.staff.email}
      </div>
    </div>

    <div className="field">
      <div className="dataLabel">
        Phone :
      </div>
      <div className="dataField">
        {props.staff.phone}
      </div>
    </div>

    <div className="field">
      <div className="dataLabel">
        Position :
      </div>
      <div className="dataField">
        {props.staff.position}
      </div>
    </div>

      <div className="field">
      <button onClick = { () => { if (window.confirm('Are you sure you wish to remove this staff member?'))
      props.handleDeleteStaff(props.staff.staffid)  } }>Remove Staff Member</button>
      </div>
    </div>
  )
}
export default Staff;
