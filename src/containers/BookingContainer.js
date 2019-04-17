import React, { Component } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

class BookingContainer extends Component{

  render(){
    return(
      <div>
        <h2>Booking Management</h2>
        <BookingForm rooms={this.props.rooms} guests = {this.props.guests} handleSubmitBooking={this.props.handleSubmitBooking}/>
        <BookingList bookings={this.props.bookings} guests={this.props.guests}
         handleDeleteBooking = {this.props.handleDeleteBooking}
         handleEditBooking = {this.props.handleEditBooking}
         handleSubmitBooking = {this.props.handleSubmitBooking}
         rooms={this.props.rooms}
         findWithAttr={this.props.findWithAttr}
         />
      </div>
    )
  }

}

export default BookingContainer;
