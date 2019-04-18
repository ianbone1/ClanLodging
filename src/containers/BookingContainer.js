import React, { Component } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import "./FormContainer.css"

class BookingContainer extends Component{

  render(){
    return(
      <div className="BookingContainer">
        <h2>Booking Management</h2>
        <div className="Form">
          <BookingForm rooms={this.props.rooms} guests = {this.props.guests} handleSubmitBooking={this.props.handleSubmitBooking}/>
        </div>
        <div className="BookingList">
          <BookingList bookings={this.props.bookings} guests={this.props.guests}
           handleDeleteBooking = {this.props.handleDeleteBooking}
           handleEditBooking = {this.props.handleEditBooking}
           handleSubmitBooking = {this.props.handleSubmitBooking}
           rooms={this.props.rooms}
           findWithAttr={this.props.findWithAttr}
           />
         </div>
      </div>
    )
  }

}

export default BookingContainer;
