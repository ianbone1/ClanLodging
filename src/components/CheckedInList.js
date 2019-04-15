import React from 'react';
import CheckOut from './CheckOut';

const CheckedInList = (props) =>{
  // Filters and removes checked in bookings
  const checkedIn = props.bookings.filter((booking) => booking.checkedIn === true)
  const bookingsNode = checkedIn.map((booking, index) => {
    return (
      <li key = {index}>
        <div>
          <CheckOut booking={booking}/>
        </div>
      </li>
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