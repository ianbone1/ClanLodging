import React, { Component } from 'react';
import CheckedInList from '../components/CheckedInList';
import NotCheckedInList from '../components/NotCheckedInList';

class CheckInOutContainer extends Component{

  render(){
    return(
      <div>
      <h2>Check in and out </h2>
      <CheckedInList bookings = {this.props.bookings} />
      <NotCheckedInList bookings = {this.props.bookings} handleDeleteBooking = {this.props.handleDeleteBooking} handleCheckIn={this.props.handleCheckIn}/>
      </div>
    )
  }
}
export default CheckInOutContainer;
