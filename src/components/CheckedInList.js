import React from 'react';
import CheckOut from './CheckOut';
import './InputForm.css';

const CheckedInList = (props) =>{
  // Filters and removes checked in bookings
  const checkedIn = props.bookings.filter((booking) => booking.checkedin === true && booking.billpaid === false)
  const bookingsNode = checkedIn.map((booking, index) => {
    return (
        <React.Fragment key={index}>
          <CheckOut booking={booking} handleCheckOut = {props.handleCheckOut}/>
        </React.Fragment>
    )
  })

  return(
    <div>
      <div className="formHeader">
        <h3>Checked In List</h3>
      </div>
      <div className="formBody">
        {bookingsNode}
      </div>
    </div>
  )

}

export default CheckedInList;
