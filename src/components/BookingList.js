import React, { Component } from 'react';
import Booking from './Booking';

class BookingList extends Component{
  render(){
    return(
      <div>
        <h4>Bookings List</h4>
        <Booking/>
      </div>
    )
  }

}
export default BookingList;
