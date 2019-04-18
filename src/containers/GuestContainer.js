import React, { Component } from 'react';

import GuestForm from '../components/GuestForm'
import GuestList from '../components/GuestList'
import "./FormContainer.css"

class GuestContainer extends Component {

  render(){
    return(
      <>
      <h2>Guest Management</h2>
      <div className="Form">
        <GuestForm handleNewGuest={this.props.handleNewGuest}/>
      </div>
      <div className="Form">
        <GuestList guests = {this.props.guests} handleDeleteGuest= {this.props.handleDeleteGuest} />
      </div>
      </>
    )
  }

}

export default GuestContainer;
