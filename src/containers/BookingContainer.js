import React, { Component } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

class BookingContainer extends Component{
  render(){
    return(
      <div>
        <h2>I am Booking Container</h2>
        <BookingForm/>
        <BookingList/>
      </div>
    )
  }

}

export default BookingContainer;
