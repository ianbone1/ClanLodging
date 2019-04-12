import React, { Component } from 'react';
import BookingContainer from './BookingContainer'

class HotelContainer extends Component {
  render(){
    return(
      <>
      <h1>I am the Hotel Container</h1>
      <BookingContainer/>
      </>
    )
  }
}

export default HotelContainer;
