import React from 'react';
import Booking from './Booking';
import '../containers/FormContainer.css'

const BookingList = (props) => {
  // Filters and removes checked in bookings

  const notCheckedIn = props.bookings.filter((booking) => booking.checkedin === false)
  const bookingsNode = notCheckedIn.map((booking, index) =>  {
    return (
      <div key={index} className="Form">
          <Booking booking={booking} handleDeleteBooking = {props.handleDeleteBooking} handleEditBooking = {props.handleEditBooking}/>
      </div>
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
