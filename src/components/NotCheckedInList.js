import React from 'react';
import BookingCheckIn from './BookingCheckIn'

const NotCheckedInList = (props) =>{
  // Filters and removes checked in bookings
  const notCheckedIn = props.bookings.filter((booking) => booking.checkedin === false)
  const bookingsNode = notCheckedIn.map((booking, index) => {
    return (  
        <React.Fragment key={index}>
          <BookingCheckIn booking={booking} handleDeleteBooking={props.handleDeleteBooking} handleCheckIn={props.handleCheckIn}/>
        </React.Fragment>
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
