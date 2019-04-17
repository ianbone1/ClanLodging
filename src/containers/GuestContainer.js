import React, { Component } from 'react';

import GuestForm from '../components/GuestForm'
import GuestList from '../components/GuestList'

class GuestContainer extends Component {

  render(){
    return(
      <div>
      <h1>Guest Management</h1>
      <GuestForm/>
      <GuestList guests = {this.props.guests} handleDeleteGuest= {this.props.handleDeleteGuest}/>

      </div>
    )
  }

}

export default GuestContainer;
