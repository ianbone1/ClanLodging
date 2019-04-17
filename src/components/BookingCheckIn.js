import React, {Component} from 'react';


class BookingCheckIn extends Component {

render(){
    return(

      <div>
        <h4>{this.props.booking.guest.firstname} {this.props.booking.guest.lastname}</h4>
        <p>Checkin: {this.props.booking.bookingdates[0]}</p>
        <p>Checkout: {this.props.booking.bookingdates.slice(-1)[0]}</p>
        <p>Room: {this.props.booking.room.roomnumber}</p>
        <button onClick={() => { this.props.handleCheckIn(this.props.booking.bookingid) }}>Check In</button>
        <button onClick = { () => { if (window.confirm('Are you sure you wish to remove this booking?'))
        this.props.handleDeleteBooking(this.props.booking.bookingid)}}>Cancel</button>
      </div>
    )
}
}

export default BookingCheckIn;
