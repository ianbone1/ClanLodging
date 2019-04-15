import React, { Component } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';



class BookingContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      rooms:props.rooms,
      guests:props.guests,
      bookings:[]
    }
  }

  render(){
    return(
      <div>
        <h2>Booking Management</h2>
        <BookingForm rooms={this.props.rooms} guests ={this.props.guests}/>
        <BookingList bookings={this.state.bookings}/>
      </div>
    )
  }

}

export default BookingContainer;
