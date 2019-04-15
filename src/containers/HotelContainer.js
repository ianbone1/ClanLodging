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
      rooms:[]
    }
  }

  componentDidMount(){
    const request = new Requests()

    const guestPromise=request.get("guests")
    const roomPromise=request.get("rooms")

    const promises = [guestPromise, roomPromise]

    Promise.all(promises)
      .then(data =>{
        this.setState({
          guests: data[0]._embedded.guests,
          rooms: data[1]._embedded.rooms
        })
      })

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
          return <BookingContainer rooms={this.state.rooms} guests={this.state.guests}/>
        }}/>

        <Route exact path = "/guests" render ={() => {
          return <GuestContainer/>
        }}/>

        <Route exact path = "/reports" render ={() => {
          return <ReportingContainer/>
        }}/>

        <Route exact path = "/bookings/edit/:id" render ={() => {
          return <EditBooking/>
        }}/>
        </Switch>
        </>
        </Router>



      </div>
    )
  }
}



export default HotelContainer;
