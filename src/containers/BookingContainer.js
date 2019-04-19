import React, { Component } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';
import "./BookingStyle.css"

class BookingContainer extends Component{

  render(){
    return(
      <div className="BookingContainer">
        <div className="BookingContainerHeader">
          <h2>Booking Management</h2>
        </div>
        <div className="BookingFormContainer">
          <BookingForm rooms={this.props.rooms} guests = {this.props.guests} handleSubmitBooking={this.props.handleSubmitBooking}/>
        </div>
        <div className="panelDivider"></div>
        <div className="BookingListContainer">
          <div id="booking__list">
          <BookingList bookings={this.props.bookings} guests={this.props.guests}
           handleDeleteBooking = {this.props.handleDeleteBooking}
           handleEditBooking = {this.props.handleEditBooking}
           handleSubmitBooking = {this.props.handleSubmitBooking}
           rooms={this.props.rooms}
           findWithAttr={this.props.findWithAttr}
           />
           </div>
         </div>
      </div>
    )
  }

}

export default BookingContainer;
