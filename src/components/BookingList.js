import React from 'react';
import Booking from './Booking';


const BookingList = (props) => {
  // Filters and removes checked in bookings
  const notCheckedIn = props.bookings.filter((booking) => booking.checkedIn === false)
  const bookingsNode = notCheckedIn.map((booking, index) => {
    return (
      <li key = {index}>
        <div>
          <Booking booking={booking}/>
        </div>
      </li>
    )
  })

    return(
      <ul>
        <h4>Upcoming Bookings</h4>
        {bookingsNode}
      </ul>
    )
}

export default BookingList;
