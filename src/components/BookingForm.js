import React, { Component } from 'react';
import Requests from '../helpers/Requests.js'


class BookingForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      checkinDate: '',
      checkoutDate: '',
      guest: null,
      room: null,
      bookingdates:[],
      partysize: '',
      checkedin: false,
      billpaid: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleDates = this.handleDates.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRooms = this.handleRooms.bind(this);
    this.buildDateList = this.buildDateList.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }


  handleRooms(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleDates(event){
    this.setState({[event.target.name]: event.target.value})
  }

    buildDateList(startDate, endDate){
      const Moment = require('moment');
      const MomentRange = require('moment-range');
      const moment = MomentRange.extendMoment(Moment);
      const start = moment(startDate)
      const end = moment(endDate)
      const range = moment.range(start, end)
      const arrayOfDates = Array.from(range.by('days'))
      return arrayOfDates
    // return Array(Math.floor((endDate - startDate) / 86400000) + 1).fill().map((_, idx) => (new Date(startDate.getTime() + idx * 86400000)))
    // return [startDate,endDate]
  }

  handleSubmit(event){
    event.preventDefault();
    const bookingDateList = this.buildDateList(this.state.checkinDate, this.state.checkoutDate)
    this.setState({bookingdates: bookingDateList})
    const booking = {
      "guest": this.state.guest,
      "room": this.state.room,
      "bookingdates": bookingDateList,
      "partysize": this.state.partysize,
      "checkedin": this.state.checkedin,
      "billpaid": this.state.billpaid}

    console.log("The Booking: ", booking)
    const request = new Requests();
    request.post('bookings', booking)
  }

  render(){
    const rooms = this.props.rooms.map((room, index) =>{
      return <option key={index} value={room._links.self.href}>Number: {room.roomnumber} {room.roomtype} £{room.rate}</option>
    })

    const guests = this.props.guests.map((guest, index) => {
      return <option key={index} value={guest._links.self.href}>{guest.firstname} {guest.lastname}</option>
    })

    return(
      <div>
      <h3>Create new Booking</h3>
      <form onSubmit={this.handleSubmit} >
        <input name="checkinDate" type="date"  onChange = {this.handleChange}/>
        <input name="checkoutDate"type="date"  onChange = {this.handleChange}/>
        <input name = "partysize" type="number" placeholder = "Party size" min="1" onChange = {this.handleChange}/>

        <select name="guest" onChange = {this.handleChange}>
          <option disabled selected>Guest Name</option>
          {guests}
        </select>

        <select name="room"  onChange = {this.handleRooms}>
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
