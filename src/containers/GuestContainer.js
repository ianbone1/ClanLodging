import React, { Component } from 'react';

import GuestForm from '../components/GuestForm'
import GuestList from '../components/GuestList'

class GuestContainer extends Component {

  render(){
    return(
      <div>
      <h2>Guest Management</h2>
      <GuestForm handleNewGuest={this.props.handleNewGuest}/>
      <GuestList guests = {this.props.guests} handleDeleteGuest= {this.props.handleDeleteGuest} />

      </div>
    )
  }

}

export default GuestContainer;
