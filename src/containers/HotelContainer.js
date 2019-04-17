import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingContainer from './BookingContainer';
import NavBar from '../NavBar';
import GuestContainer from './GuestContainer';
import ReportingContainer from './ReportingContainer';
import StaffContainer from './StaffContainer';
import EditBooking from '../components/EditBooking';
import Requests from '../helpers/Requests.js'

class HotelContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      guests:[],
      rooms:[],
      bookings: [],
      staffs: [],
      editBooking: null
    }
    this.findWithAttr = this.findWithAttr.bind(this);
    this.handleDeleteBooking = this.handleDeleteBooking.bind(this);
    this.handleEditBooking = this.handleEditBooking.bind(this);
    this.handleDeleteGuest = this.handleDeleteGuest.bind(this);
    this.handleNewGuest = this.handleNewGuest.bind(this);
    this.handleSubmitBooking = this.handleSubmitBooking.bind(this);
  }

  componentDidMount(){
    const request = new Requests()

    const guestPromise=request.get("/api/guests")
    const roomPromise=request.get("/api/rooms")
    const bookingPromise = request.get("/api/bookings")
    const staffPromise=request.get("/api/staffs")

    const promises = [guestPromise, roomPromise, bookingPromise, staffPromise]

    Promise.all(promises)
      .then(data =>{
        this.setState({
          guests: data[0]._embedded.guests,
          rooms: data[1]._embedded.rooms,
          bookings: data[2]._embedded.bookings,
          staffs: data[3]._embedded.staffs
        })
      })
  }

  findWithAttr(array, attr, value) {

     for(var i = 0; i < array.length; i += 1) {
       console.log("findAttrElement: attr: " +array[i])
         if((array[i][attr]) === value) {

             return i;
         }
     }
     return -1;
  }

  handleDeleteBooking(id){
    console.log("About to delete booking id:", id)
    const request = new Requests();
    const url = `/api/bookings/${id}`;
    request.delete(url);
    const prevState = this.state.bookings
    const index = this.findWithAttr(this.state.bookings, "bookingid", id)
    prevState.splice(index, 1)
    this.setState({bookings: prevState})
  }

  handleSubmitBooking(booking){
    console.log("About to submit(PUT) this booking:", booking)

    const request = new Requests();
    request.post('/api/bookings', booking)
  }

  handleEditBooking(booking){
    console.log("Just set state of editBooking with:" , this.state.editBooking)
    this.setState({editBooking: booking})
  }

  handleDeleteGuest(id){
    const request = new Requests();
    const url = `/api/guests/${id}`;
    console.log(url);
    request.delete(url);
    const prevState = this.state.guests
    const index = this.findWithAttr(this.state.guests, "guestid", id)
    prevState.splice(index, 1)
    this.setState({guests: prevState})
  }

  handleNewGuest(newGuest){
    const prevState = this.state.guests
    const newState = [...prevState, newGuest]
    this.setState({guests: newState})
  }


  render(){

    return(
      <div>
        <Router>
        <>
        <NavBar/>
        <h1>ClanLodging</h1>
        <Switch>

        <Route exact path = "/bookingslocal" render ={() => {
          return <BookingContainer rooms={this.state.rooms}
          guests={this.state.guests}
          bookings = {this.state.bookings}
          handleDeleteBooking = {this.handleDeleteBooking}
          handleEditBooking = {this.handleEditBooking}
          handleSubmitBooking={this.handleSubmitBooking}
          findWithAttr={this.findWithAttr}
          />
        }}/>

        <Route exact path = "/guests" render ={() => {
          return <GuestContainer guests={this.state.guests} handleDeleteGuest= {this.handleDeleteGuest} handleNewGuest={this.handleNewGuest}/>
        }}/>

        <Route exact path = "/reports" render ={() => {
          return <ReportingContainer/>
        }}/>

        <Route exact path = "/staffs" render ={() => {
          return <StaffContainer staffs={this.state.staffs} />
        }}/>

        <Route exact path = "/edit" render ={() => {
          return <EditBooking booking={this.state.editBooking} rooms={this.state.rooms} guests={this.state.guests} handleSubmitBooking={this.handleSubmitBooking} handleDeleteBooking={this.handleDeleteBooking} findWithAttr={this.findWithAttr}/>
        }}/>
        </Switch>
        </>
        </Router>
      </div>
    )
  }
}



export default HotelContainer;
