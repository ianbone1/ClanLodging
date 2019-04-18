import React from 'react';
import Booking from './Booking';


const BookingList = (props) => {
  // Filters and removes checked in bookings

  const notCheckedIn = props.bookings.filter((booking) => booking.checkedin === false)
  const bookingsNode = notCheckedIn.map((booking, index) =>  {
    return (
      <div key={index}>
          <Booking booking={booking} handleDeleteBooking = {props.handleDeleteBooking} handleEditBooking = {props.handleEditBooking}/>
      </div>
    )
  })



    return(
      <div>
        <div className="formHeader">
        <h4>Upcoming Bookings</h4>
        </div>
        <div className="formBody">
        {bookingsNode}
        </div>
      </div>
    )
}

export default BookingList;
