import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BookingContainer from './BookingContainer';
import NavBar from '../NavBar';
import GuestContainer from './GuestContainer';
import ReportingContainer from './ReportingContainer';

class HotelContainer extends Component {
  render(){
    return(
      <div>
        <Router>
        <>
        <NavBar/>
        <h1>I am the Hotel Container</h1>
        <BookingContainer/>
        <GuestContainer/>
        <ReportingContainer/>
        </>
        </Router>



      </div>
    )
  }
}

export default HotelContainer;
