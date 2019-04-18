import React from 'react';
import BookingCheckIn from './BookingCheckIn'

const NotCheckedInList = (props) =>{
  // Filters and removes checked in bookings
  const notCheckedIn = props.bookings.filter((booking) => booking.checkedin === false)
  const bookingsNode = notCheckedIn.map((booking, index) => {
    return (
      <li key = {index}>
        <div>
          <BookingCheckIn booking={booking} handleDeleteBooking={props.handleDeleteBooking} handleCheckIn={props.handleCheckIn}/>
        </div>
      </li>
    )
  })

  return(
    <div>
    <h3>Not Checked In List</h3>
    {bookingsNode}
    </div>
  )

}

export default NotCheckedInList;
