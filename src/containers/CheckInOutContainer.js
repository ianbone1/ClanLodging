import React, { Component } from 'react';
import CheckedInList from '../components/CheckedInList';
import NotCheckedInList from '../components/NotCheckedInList';
import "./CheckingStyle.css";

class CheckInOutContainer extends Component{

  render(){
    return(
      <div className="checkingContainer">
        <div className="checkingContainerHeader">
          <h2>Check in and out </h2>
        </div>
        <div className="BookingListContainer">
          <CheckedInList handleCheckOut = {this.props.handleCheckOut} bookings = {this.props.bookings} />
        </div>

        <div className ="panelDivider"></div>

        <div className="BookingListContainer">
          <NotCheckedInList bookings = {this.props.bookings}
          handleDeleteBooking = {this.props.handleDeleteBooking}
          handleCheckIn={this.props.handleCheckIn}/>
        </div>
      </div>
    )
  }
}
export default CheckInOutContainer;
