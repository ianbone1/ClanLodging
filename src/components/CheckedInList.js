import React from 'react';
import CheckOut from './CheckOut';

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
      <h3>Checked In List</h3>
      {bookingsNode}
    </div>
  )

}

export default CheckedInList;
