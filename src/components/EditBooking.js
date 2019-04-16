import React, {Component} from 'react';
import Requests from '../helpers/Requests.js'
import {Redirect} from 'react-router-dom';

class EditBooking extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkinDate: this.props.booking.bookingDates[0],
      checkoutDate: this.props.booking.bookingDates.slice(-1)[0],
      guest: this.props.booking.guest,
      room: this.props.booking.room,
      bookingDates:[],
      partySize: this.props.booking.partySize,
      checkedIn: this.props.booking.checkedIn,
      billPaid: this.props.booking.billPaid,
      redirectMe: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildDateList = this.buildDateList.bind(this);
  }

  handleChange(event){
    console.log("Event.target.name:", event.target.name)
    console.log("Event.target.value:", event.target.value)
    this.setState({[event.target.name]: event.target.value})
    console.log("Party size is now: ", this.state.partySize)
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
}

  handleSubmit(event){
    event.preventDefault();
    const bookingDateList = this.buildDateList(this.state.checkinDate, this.state.checkoutDate)
    // this.setState({bookingDates: bookingDateList})
    const booking = {
      "guest": this.state.guest,
      "room": this.state.room,
      "bookingDates": bookingDateList,
      "partySize": parseInt(this.state.partySize),
      "checkedIn": false,
      "billPaid": false}

    const url = `/bookings/${this.props.booking.bookingID}`
    console.log("****** EDITED BOOKING ***** ", booking)
    const request = new Requests();
    request.update(url, booking)
    this.setState({redirectMe: true})
  }


render(){
  const room = this.props.rooms.map((room, index) =>{
    return <option key={index} value={room._links.self.href}>Number: {room.roomNumber} {room.roomType} £{room.rate}</option>
  })

  const guest = this.props.guests.map((guest, index) => {
    return <option key={index} value={guest._links.self.href}>{guest.firstName} {guest.lastName}</option>
  })

  if (!this.props.booking) return null;

  if (this.state.redirectMe === true) {
        return <Redirect to='/bookings' />
      }

return(
  <div>
    <h2>Edit page</h2>
    <form  onSubmit={this.handleSubmit}>
    <input name="checkinDate" type="date"  defaultValue={this.state.checkinDate} onChange = {this.handleChange}/>
    <input name="checkoutDate"type="date"  defaultValue={this.state.checkoutDate} onChange = {this.handleChange}/>

    <input name = "partySize" type="number" defaultValue={this.state.partySize} onChange = {this.handleChange}/>

    <select name="guest" onChange = {this.handleChange}>
      <option disabled selected value = {this.state.guest}>{this.state.guest.firstName} {this.state.guest.lastName}</option>
      {guest}
    </select>

    <select name="room" onChange = {this.handleChange} >
      <option disabled selected value = {this.state.room}>Number: {this.state.room.roomNumber} {this.state.room.roomType} £{this.state.room.rate}</option>
      {room}
      </select>

    <button type="submit">Save Changes</button>
    </form>
  </div>
)

}
}

export default EditBooking;
