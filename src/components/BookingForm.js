import React, { Component } from 'react';

class BookingForm extends Component{
constructor(props){
  super(props);
    this.state = {
        checkinDate: '',
        checkoutDate: '',
        guestId: null,
        partySize: '',
        roomId: null,
        checkedIn: false,
        rate: '',
        billPaid: false
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleDates = this.handleDates.bind(this);
}

handleChange(event){
  this.setState({[event.target.name]: event.target.value})
}

handleDates(event){
  this.setState({[event.target.name]: event.target.value})
}

  render(){
    return(
      <div>
        <h3>I am Booking Form</h3>
        <form name="dates" action="" >
          <input name="checkinDate" type="date"  onChange = {this.handleDates}/>
          <input name="checkoutDate"type="date"  onChange = {this.handleDates}/>
          <input name = "partySize" type="number" placeholder = "Party size" onChange = {this.handleChange}/>

          <select name="guestId" onChange = {this.handleChange}>
           <option disabled selected>Guest Name</option>
           <option value="1">Johnny Bravo</option>
           <option value="2">SpongeBob</option>
          </select>

          <select name="roomId" onChange = {this.handleChange}>
           <option disabled selected>Pick Room</option>
           <option value="1">Double</option>
           <option value="2">Twin</option>
          </select>

        </form>
      </div>
    )
  }
}

export default BookingForm;

// Booking={
//   bookingID: Long,
//   dates:[Dates],
//   guestID: Guest.guestID,
//   partySize:Integer,
//   roomID: Room.roomID,
//   checkedIn: Boolean,
//   rate:Float,
//   billPaid:Boolean
// }
