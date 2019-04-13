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
    const rooms = this.props.rooms.map((room, index) =>{
      return <option key={index} value={room.roomNumber}>Number: {room.roomNumber} {room.roomType} £{room.rate}</option>
    })

    const guests = this.props.guests.map((guest, index) => {
      return <option value={guest.personId}>{guest.firstName} {guest.lastName}</option>
    })

    return(
      <div>
      <h3>I am Booking Form</h3>
      <form name="dates" action="" >
      <input name="checkinDate" type="date"  onChange = {this.handleDates}/>
      <input name="checkoutDate"type="date"  onChange = {this.handleDates}/>
      <input name = "partySize" type="number" placeholder = "Party size" onChange = {this.handleChange}/>

      <select name="guestId" onChange = {this.handleChange}>
      <option disabled selected>Guest Name</option>
      {guests}
      </select>

      <select name="roomId" onChange = {this.handleChange}>
      <option disabled selected>Pick Room</option>
      {rooms}
      </select>
      <button type="submit">Create Booking</button>
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
