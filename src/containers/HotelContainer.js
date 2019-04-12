import React, { Component } from 'react';
import GuestContainer from './GuestContainer'

class HotelContainer extends Component {
  render(){
    return(
      <div>
      <h1>I am the Hotel Container</h1>
      <GuestContainer/>

      </div>
    )
  }

}

export default HotelContainer;
