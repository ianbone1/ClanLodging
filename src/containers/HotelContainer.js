import React, { Component } from 'react';
import GuestContainer from './GuestContainer';
import ReportingContainer from './ReportingContainer';

class HotelContainer extends Component {
  render(){
    return(
      <div>
      <h1>I am the Hotel Container</h1>
      <GuestContainer/>
      <ReportingContainer/>

      </div>
    )
  }

}

export default HotelContainer;
