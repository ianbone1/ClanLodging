import React, { Component } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';




class BookingContainer extends Component{

  render(){
    return(
      <div>
        <h2>Booking Management</h2>
        <BookingForm rooms={this.props.rooms} guests = {this.props.guests}/>
        <BookingList bookings={this.props.bookings} guests = {this.props.guests} handleDelete = {this.props.handleDelete}/>
      </div>
    )
  }

}

export default BookingContainer;
