import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import Moment from 'moment'
import './BookingForm.css'

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
      billpaid: false,
      roomtype: "SINGLE",
      redirectMe: false,
      today: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.buildDateList = this.buildDateList.bind(this);
    this.prepSubmit = this.prepSubmit.bind(this);
    this.dynamicSort = this.dynamicSort.bind(this);
  }

  handleChange(event){
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
    const arrayOfStringDates = arrayOfDates.map((aMoment) => {return aMoment.format("YYYY-MM-DD")})
    return arrayOfStringDates
  }

  prepSubmit(event){
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
      this.props.handleSubmitBooking(booking)
      this.setState({redirectMe: true})

    }

    dynamicSort(property){
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
    }

    render(){

      if (!this.props.rooms) return null
      if (!this.props.guests) return null

      let roomsSorted = this.props.rooms.sort(this.dynamicSort("roomnumber"))

      const rooms = () => {
          //filter by type
          let roomsFilteredByType = roomsSorted.filter((room, index) =>{
            return room.roomtype===this.state.roomtype
          })
          //further filter if already booked during datelist
          let keepFiltered = [];
          if (this.state.checkinDate !=='' && this.state.checkoutDate !==''){
            //get array of date range
            const bookingDateList = this.buildDateList(this.state.checkinDate, this.state.checkoutDate)
            // this.setState({bookingdates: bookingDateList})
            for (let i=0; i<roomsFilteredByType.length; i++){
              if (roomsFilteredByType[i]["_embedded"]){
                //the room has bookings so needs checked
                //build an arrays of arrays of all the dates room is booked
                let testArrays=[]
                for (let b=0; b<roomsFilteredByType[i]._embedded.bookings.length; b++){
                  testArrays.push(roomsFilteredByType[i]._embedded.bookings[b].bookingdates)
                }
                //if none of the dates in each array appear in the bookingDateList, keep it.
                if (!testArrays.some(a => a.some(s => bookingDateList.includes(s)))){
                  keepFiltered.push(roomsFilteredByType[i])
                }
              } else{
                //The room has no bookings so can be added stright to the keep list.
                keepFiltered.push(roomsFilteredByType[i])
              }
            }
          }
          //finally build the options list for the drop down
          let roomOptions = keepFiltered.map((room, index) => {
            return <option key={index} value={room._links.self.href}>Number: {room.roomnumber} {room.roomtype} £{room.rate}</option>
          })
          return roomOptions
        }

      const guests = this.props.guests.map((guest, index) => {
        return <option key={index} value={guest._links.self.href}>{guest.firstname} {guest.lastname}</option>
      })

      const roomtypes = () =>{
        let allRoomTypes = this.props.rooms.map((room,index) => {
          return room.roomtype
        })
        allRoomTypes = Array.from(new Set(allRoomTypes))
        const roomTypeOptions = allRoomTypes.map((roomType,index) => {
          return <option key={index} value={roomType}>{roomType}</option>
        })
        return roomTypeOptions
      }

      if (this.state.redirectMe){
        return <Redirect to='/' />
      }

      // this.setState({today: Moment().format("YYYY-MM-DD")})

      return(
        <>
          <h3>Create new Booking</h3>
          <div className="inputForm">
            <form onSubmit={this.prepSubmit}>

              <div className="field">
                <div className="inputLabel">
                  <label for="guest">Select Guest </label>
                </div>
                <div className="inputField">
                  <select id="guest" name="guest" defaultValue="Guest Name"onChange = {this.handleChange}>
                    <option disabled value="Guest Name">Guest Name</option>
                    {guests}
                  </select>
                </div>
              </div>

              <div className="field">
                <div className="inputLabel">
                  <label for="checkinDate">Check In </label>
                </div>
                <div className="inputField">
                  <input id="checkinDate" name="checkinDate" type="date" min={Moment().format("YYYY-MM-DD")}onChange={this.handleChange}/>
                </div>
              </div>

              <div className="field">
                <div className="inputLabel">
                  <label for="checkoutDate">Check Out: </label>
                </div>
                <div className="inputField">
                  <input id="checkoutDate" name="checkoutDate"type="date" min={this.state.checkinDate} onChange={this.handleChange}/>
                </div>
              </div>

              <div className="field">
                <div className="inputLabel">
                  <label for="partysize">Party Size </label>
                </div>
                <div className="inputField">
                  <select id="partysize" name="partysize" onChange={this.handleChange}>
                    <option key="1" value="1">1</option>
                    <option key="2" value="2">2</option>
                    <option key="3" value="3">3</option>
                    <option key="4" value="4">4</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <div className="inputLabel">
                  <label for="roomtype">Room Type </label>
                </div>
                <div className="inputField">
                  <select id="roomtype" name="roomtype" defaultValue={this.state.roomType} onChange={this.handleChange}>
                    {roomtypes()}
                  </select>
                </div>
              </div>

              <div className="field">
                <div className="inputLabel">
                  <label for="room">Room # </label>
                </div>
                <div className="inputField">
                  <select id="room" name="room" defaultValue="1" onChange = {this.handleChange}>
                  {rooms()}
                  </select>
                </div>
              </div>
              <div className="field">
                <button type="submit">Create Booking</button>
              </div>
            </form>
          </div>
        </>
      )
    }
  }

  export default BookingForm;
