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
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleDates(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const booking = this.state;
    const room = this.props.rooms[booking.roomId]
    room.bookings.push(booking);
    room.calendar.push(booking.checkinDate, booking.checkoutDate)
    console.log(room);
    console.log(booking);

  }

  render(){
    const rooms = this.props.rooms.map((room, index) =>{
      return <option key={index} value={index}>Number: {room.roomNumber} {room.roomType} £{room.rate}</option>
    })

    const guests = this.props.guests.map((guest, index) => {
      return <option key={index} value={guest.personId}>{guest.firstName} {guest.lastName}</option>
    })

    return(
      <div>
      <h3>I am Booking Form</h3>
      <form onSubmit={this.handleSubmit} >
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
