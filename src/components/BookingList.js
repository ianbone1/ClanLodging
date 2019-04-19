import React from 'react';
import Booking from './Booking';


const BookingList = (props) => {
  // Filters and removes checked in bookings

  const notCheckedIn = props.bookings.filter((booking) => booking.checkedin === false)
  const bookingsNode = notCheckedIn.map((booking, index) =>  {
    return (
      <React.Fragment key={index}>
          <Booking booking={booking} handleDeleteBooking = {props.handleDeleteBooking} handleEditBooking = {props.handleEditBooking}/>
      </React.Fragment>
    )
  })



    return(
      <div>
        <div className="formHeader">
        <h3>Upcoming Bookings</h3>
        </div>
        <div className="formBody">
        {bookingsNode}
        </div>
      </div>
    )
}

export default BookingList;
