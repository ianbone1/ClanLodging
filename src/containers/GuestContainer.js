import React, { Component } from 'react';
import GuestForm from '../components/GuestForm'
import GuestList from '../components/GuestList'

class GuestContainer extends Component {
  render(){
    return(
      <div>
      <h1>I am the Guest Container</h1>
      <GuestForm/>
      <GuestList/>
      </div>
    )
  }

}

export default GuestContainer;
