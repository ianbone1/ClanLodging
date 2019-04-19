import React, {Component} from 'react';
import './Booking.css';


class BookingCheckIn extends Component {

  // TODO: need to dynamically update the checked in list if a booking is checked in

  render(){
    return(
      <div className="dataBox">

      <div className="dataDisplay">
      Name : {this.props.booking.guest.firstname} {this.props.booking.guest.lastname}
      </div>

      <div className="dataDisplay">
      Room # : {this.props.booking.room.roomnumber} {this.props.booking.room.roomtype}
      </div>

      <div className="dataDisplay">
      Chack-in Date : {this.props.booking.bookingdates[0]}
      </div>

      <div className="dataDisplay">
      Check Our : {this.props.booking.bookingdates.slice(-1)[0]}
      </div>

      <div className="dataDisplay">
      Party Size : {this.props.booking.partysize}
      </div>

      <div className="dataDisplay">
      <button className="buttonControl" onClick={() => { this.props.handleCheckIn(this.props.booking.bookingid) }}>Check In</button>
      </div>
      <div className="dataDisplay">
      <button className="buttonControl" onClick = { () => { if (window.confirm('Are you sure you wish to remove this booking?'))
      this.props.handleDeleteBooking(this.props.booking.bookingid)}}>Cancel</button>
      </div>
      </div>
    )
  }
}

export default BookingCheckIn;
