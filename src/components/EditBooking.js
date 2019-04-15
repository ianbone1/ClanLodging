import React, {Component} from 'react';
import Requests from '../helpers/Requests.js'

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
      billPaid: false
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
    const url = `http://localhost:3000/bookings/:id`
    console.log("The Booking: ", booking)
    const request = new Requests();
    request.update(url, booking)
  }


render(){
  const room = this.props.rooms.map((room, index) =>{
    return <option key={index} value={room._links.self.href}>Number: {room.roomNumber} {room.roomType} £{room.rate}</option>
  })

  const guest = this.props.guests.map((guest, index) => {
    return <option key={index} value={guest._links.self.href}>{guest.firstName} {guest.lastName}</option>
  })

return(
  <div>
    <h2>Edit page</h2>
    <form  onSubmit={this.handleSubmit}>
    <input name="checkinDate" type="date"  value = {this.props.booking.checkinDate} onChange = {this.handleChange}/>
    <input name="checkoutDate"type="date"  value = {this.props.booking.checkoutDate} onChange = {this.handleChange}/>

    <input name = "partySize" type="number"  min="1" onChange = {this.handleChange}/>

    <select name="guest" onChange = {this.handleChange}>
      <option disabled value = {this.props.booking.guest}>{this.props.booking.guest.firstName} {this.props.booking.guest.lastName}</option>
      {guest}
    </select>

    <select name="room" onChange = {this.handleChange} >
      <option disabled value = {this.props.booking.room}>Number: {this.props.booking.room.roomNumber} {this.props.booking.room.roomType} £{this.props.booking.room.rate}</option>
      {room}
      </select>

    <button type="submit">Create Booking</button>
    </form>
  </div>
)

}
}

export default EditBooking;
