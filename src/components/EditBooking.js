import React, {Component} from 'react';
import Requests from '../helpers/Requests.js'
import {Redirect} from 'react-router-dom';

class EditBooking extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkinDate: '',
      checkoutDate: '',
      guest: null,
      room: null,
      bookingDates:[],
      partySize: '',
      checkedIn: false,
      billPaid: false,
      redirectMe: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildDateList = this.buildDateList.bind(this);
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  buildDateList(startDate, endDate){
    return [startDate,endDate]
  }

  handleSubmit(event){
    event.preventDefault();
    const bookingDateList = this.buildDateList(this.state.checkinDate, this.state.checkoutDate)
    this.setState({bookingDates: bookingDateList})
    const booking = {
      "guest": this.state.guest,
      "room": this.state.room,
      "bookingDates": bookingDateList,
      "partySize": this.state.partySize,
      "checkedIn": this.state.checkedIn,
      "billPaid": this.state.billPaid}
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
    <input name="checkinDate" type="date"  defaultValue={this.props.booking.bookingDates[0]} onChange = {this.handleChange}/>
    <input name="checkoutDate"type="date"  defaultValue={this.props.booking.bookingDates.slice(-1)[0]} onChange = {this.handleChange}/>

    <input name = "partySize" type="number" defaultValue={this.props.booking.partySize} onChange = {this.handleChange}/>

    <select name="guest" onChange = {this.handleChange}>
      <option disabled selected value = {this.props.booking.guest}>{this.props.booking.guest.firstName} {this.props.booking.guest.lastName}</option>
      {guest}
    </select>

    <select name="room" onChange = {this.handleChange} >
      <option disabled selected value = {this.props.booking.room}>Number: {this.props.booking.room.roomNumber} {this.props.booking.room.roomType} £{this.props.booking.room.rate}</option>
      {room}
      </select>

    <button type="submit">Save Changes</button>
    </form>
  </div>
)

}
}

export default EditBooking;
