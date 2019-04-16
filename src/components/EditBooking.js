import React, {Component} from 'react';
import Requests from '../helpers/Requests.js'
import {Redirect} from 'react-router-dom';

class EditBooking extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkinDate: this.props.booking.bookingdates[0],
      checkoutDate: this.props.booking.bookingdates.slice(-1)[0],
      guest: this.props.booking.guest._links.self.href,
      room: this.props.booking.room._links.self.href,
      bookingdates:[],
      partysize: this.props.booking.partysize,
      checkedin: this.props.booking.checkedin,
      billpaid: this.props.booking.billpaid,
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
    console.log("Party size is now: ", this.state.partysize)
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
      "bookingdates": bookingDateList,
      "partysize": this.state.partysize,
      "checkedin": this.state.checkedin,
      "billpaid": this.state.billpaid}

    const url = `/bookings/${this.props.booking.bookingid}`
    console.log("****** EDITED BOOKING ***** ", booking)
    const request = new Requests();
    request.update(url, booking)
    this.setState({redirectMe: true})
  }


render(){
  const room = this.props.rooms.map((room, index) =>{
    return <option key={index} value={room._links.self.href}>Number: {room.roomnumber} {room.roomtype} £{room.rate}</option>
  })

  const guest = this.props.guests.map((guest, index) => {
    return <option key={index} value={guest._links.self.href}>{guest.firstname} {guest.lastname}</option>
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

    <input name = "partysize" type="number" defaultValue={this.state.partysize} onChange = {this.handleChange}/>

    <select name="guest" onChange = {this.handleChange}>
      <option disabled selected value = {this.state.guest._links.self.href}>{this.state.guest.firstname} {this.state.guest.lastname}</option>
      {guest}
    </select>

    <select name="room" onChange = {this.handleChange} >
      <option disabled selected value = {this.state.room._links.self.href}>Number: {this.state.room.roomnumber} {this.state.room.roomtype} £{this.state.room.rate}</option>
      {room}
      </select>

    <button type="submit">Save Changes</button>
    </form>
  </div>
)

}
}

export default EditBooking;
