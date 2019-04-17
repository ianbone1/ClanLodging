import React, { Component } from 'react';
import CheckedInList from '../components/CheckedInList';
import NotCheckedInList from '../components/NotCheckedInList';

class CheckInOutCOntainer extends Component{
constructor(props){
  super(props);
  this.state = {
    bookings: [
      {
        bookingid: 2,
        checkinDate: '2019-04-13',
        checkoutDate: '2019-04-28',
        guestId: 'Not Checked in',
        partySize: '1',
        roomId: 22,
        checkedIn: false,
        rate: '22.65',
        billPaid: false
      },
      {
        bookingId: 4,
        checkinDate: '2019-04-13',
        checkoutDate: '2019-04-28',
        guestId: 'Checked In',
        partySize: '1',
        roomId: 22,
        checkedIn: true,
        rate: '22.65',
        billPaid: false
      }
    ]
  }
}

  render(){
    return(
      <div>
      <h2>Check in and out </h2>
      <CheckedInList bookings = {this.state.bookings}/>
      <NotCheckedInList bookings = {this.state.bookings}/>
      </div>
    )
  }
}
export default CheckInOutCOntainer;
