import React from 'react';

const EditBooking = () => {

  // Will eventuall allow bookings to be edited
  const url = "/bookings/edit/:id"
  if (!url) {
    return null
  }
    return(
      <h3>Edit Booking</h3>
    )
}


export default EditBooking;
