import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class EditBooking extends Component {
  constructor(props){
    super(props);
    this.state = {
      checkinDate: props.booking.bookingdates[0],
      checkoutDate: props.booking.bookingdates.slice(-1)[0],
      guest: null,
      room: null,
      bookingdates:[],
      partysize: props.booking.partysize,
      checkedin: props.booking.checkedin,
      billpaid: props.booking.billpaid,
      redirectMe: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildDateList = this.buildDateList.bind(this);
    this.findGuestURL = this.findGuestURL.bind(this);
    this.findRoomURL = this.findRoomURL.bind(this);
    this.findGuest = this.findGuest.bind(this);
  }

  handleChange(event){
    console.log("Event.target.name:", event.target.name)
    console.log("Event.target.value:", event.target.value)
    this.setState({[event.target.name]: event.target.value})
    console.log("Party size is now: ", this.state.partysize)
  }

  findGuestURL(bookingid){
    for (let i =0; i<this.props.guests.length; i++){
      if (this.props.guests[i].bookings){
        for(let b=0;b<this.props.guests[i].bookings.length; b++){
          if (this.props.guests[i].bookings[b].bookingid===bookingid){
            const roomURL=this.props.guests[i]["_links"].self.href
            this.setState({guest: roomURL})
            return roomURL
          }
        }
      }
    }
  }

  findRoomURL(bookingid){
    for (let i =0; i<this.props.rooms.length; i++){
      if (this.props.rooms[i]["_embedded"]){
        for(let b=0;b<this.props.rooms[i]["_embedded"].bookings.length; b++){
          if (this.props.rooms[i]["_embedded"].bookings[b].bookingid===bookingid){
            const roomURL=this.props.rooms[i]["_links"].self.href
            this.setState({room: roomURL})
            return roomURL
          }
        }
      }
    }
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

  findGuest(array, attr, value) {
     for(var i = 0; i < array.length; i += 1) {
       console.log("findAttrElement: attr: " +array[i])
         if((array[i][attr]) === value) {
             return array[i];
         }
     }
     return -1;
  }

  handleSubmit(event){
    event.preventDefault();
    const bookingDateList = this.buildDateList(this.state.checkinDate, this.state.checkoutDate)

    // console.log("local Room URL :", roomURL)
    // this.setState({bookingDates: bookingDateList})
    const booking = {
      "bookingdates": bookingDateList,
      "partysize": this.state.partysize,
      "checkedin": this.state.checkedin,
      "billpaid": this.state.billpaid}

      if ((this.state.guest==null)){
        const guest = this.findGuest(this.props.guests,"guestid",this.props.booking.guestid)
        console.log("the found guest:", guest)
        const guestURL = guest["_links"].self.href
        booking["guest"]= guestURL
        console.log("Found guest URL:", booking.guest)
      } else {
        booking["guest"]= this.state.guest
      }

      if ((this.state.room===null) || (typeof this.state.room === "undefined")){
        const roomURL = this.findRoomURL(this.props.booking.bookingid)
        booking["room"]= roomURL
      } else {
        booking["room"]= this.state.room
      }
      console.log("booking.room :", booking.room)

      this.props.handleSubmitBooking(booking);

      this.props.handleDeleteBooking(this.props.booking.bookingid);


      this.setState({redirectMe: true})
    }


    render(){
      const room = this.props.rooms.map((room, index) =>{
        return <option key={index} value={room._links.self.href}>Number: {room.roomnumber} {room.roomtype} £{room.rate}</option>
      })

      const guest = this.props.guests.map((guest, index) => {
        return <option key={index} value={guest._links.self.href}>{guest.firstname} {guest.lastname}</option>
      })

      if (!this.props.booking || !this.props.guests || !this.props.rooms) return null;


      if (this.state.redirectMe === true) {
        return <Redirect to='/bookingslocal' />
      }

      return(
        <div>
        <h2>Edit page</h2>
        <form  onSubmit={this.handleSubmit}>
        <input name="checkinDate" type="date"  defaultValue={this.state.checkinDate} onChange = {this.handleChange}/>
        <input name="checkoutDate"type="date"  defaultValue={this.state.checkoutDate} onChange = {this.handleChange}/>

        <input name = "partysize" type="number" defaultValue={this.state.partysize} onChange = {this.handleChange}/>

        <select name="guest" onChange = {this.handleChange}>
        <option disabled selected value = {this.state.guest}>{this.props.booking.guest.firstname} {this.props.booking.guest.lastname}</option>
        {guest}
        </select>

        <select name="room" onChange = {this.handleChange} >
        <option disabled selected value = {this.state.room}>Number: {this.props.booking.room.roomnumber} {this.props.booking.room.roomtype} £{this.props.booking.room.rate}</option>
        {room}
        </select>

        <button type="submit">Save Changes</button>
        </form>
        </div>
      )

    }
  }

  export default EditBooking;
