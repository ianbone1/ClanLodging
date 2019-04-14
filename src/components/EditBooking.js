import React from 'react';

const EditBooking = () => {

  // Will eventuall allow bookings to be edited
  // Should only render when the url is called with the bookings ID.
  // Right now it opens no matter what...
  const url = "/bookings/edit/:id"
  if (!url) {
    return null
  }
    return(
      <h3>Edit Booking</h3>
    )
}


export default EditBooking;
