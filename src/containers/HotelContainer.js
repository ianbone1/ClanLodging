import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingContainer from './BookingContainer';
import NavBar from '../NavBar';
import GuestContainer from './GuestContainer';
import ReportingContainer from './ReportingContainer';
import EditBooking from '../components/EditBooking';

class HotelContainer extends Component {


  render(){

    return(
      <div>
        <Router>
        <>
        <NavBar/>
        <h1>I am the Hotel Container</h1>
        <Switch>

        <Route exact path = "/bookings" render ={() => {
          return <BookingContainer/>
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
