import React from 'react';
import BookingCheckIn from './BookingCheckIn';
import './InputForm.css';

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
      <div className="formHeader">
        <h3>Upcoming Checkins</h3>
      </div>
      <div className="formBody">
        {bookingsNode}
      </div>
    </div>
  )

}

export default NotCheckedInList;
