import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingContainer from './BookingContainer';
import NavBar from '../NavBar';
import GuestContainer from './GuestContainer';
import ReportingContainer from './ReportingContainer';
import EditBooking from '../components/EditBooking';
import Requests from '../helpers/Requests.js'

class HotelContainer extends Component {

  constructor(props){
    super(props)
    this.state = {
      guests:[],
      rooms:[],
      bookings: [],
      editBooking: null
    }
    this.findWithAttr = this.findWithAttr.bind(this);
    this.handleDeleteBooking = this.handleDeleteBooking.bind(this);
    this.handleEditBooking = this.handleEditBooking.bind(this);
  }

  componentDidMount(){
    const request = new Requests()

    const guestPromise=request.get("guests")
    const roomPromise=request.get("rooms")
    const bookingPromise = request.get("bookings/")

    const promises = [guestPromise, roomPromise, bookingPromise]

    Promise.all(promises)
      .then(data =>{
        this.setState({
          guests: data[0]._embedded.guests,
          rooms: data[1]._embedded.rooms,
          bookings: data[2],
          editBooking: null
        })
      })
  }

  findWithAttr(array, attr, value) {
     for(var i = 0; i < array.length; i += 1) {
         if(array[i][attr] === value) {
             return i;
         }
     }
     return -1;
  }

  handleDeleteBooking(id){
    const request = new Requests();
    const url = `bookings/${id}`;
    request.delete(url);
    const prevState = this.state.bookings
    const index = this.findWithAttr(this.state.bookings, "bookingid", id)
    prevState.splice(index, 1)
    this.setState({bookings: prevState})
  }

  handleEditBooking(id){
    const index = this.findWithAttr(this.state.bookings, "bookingid", id)
    const bookingToEdit = this.state.bookings.splice(index, 1)
    console.log("Just set state of editBooking with:" , this.state.editBooking)

    this.setState({editBooking: bookingToEdit[0]})
    // console.log(bookingToEdit[0]);
    // console.log(index);
    // const urlCheck = "http://localhost:8080/bookings/:id"
    // console.log(urlCheck);
  }


  render(){

    return(
      <div>
        <Router>
        <>
        <NavBar/>
        <h1>ClanLodging</h1>
        <Switch>

        <Route exact path = "/bookings" render ={() => {
          return <BookingContainer rooms={this.state.rooms} guests={this.state.guests} bookings = {this.state.bookings} handleDeleteBooking = {this.handleDeleteBooking} handleEditBooking = {this.handleEditBooking}/>
        }}/>

        <Route exact path = "/guests" render ={() => {
          return <GuestContainer/>
        }}/>

        <Route exact path = "/reports" render ={() => {
          return <ReportingContainer/>
        }}/>

        <Route exact path = "/edit" render ={() => {
          return <EditBooking booking = {this.state.editBooking} rooms={this.state.rooms} guests={this.state.guests}/>
        }}/>
        </Switch>
        </>
        </Router>
      </div>
    )
  }
}



export default HotelContainer;
