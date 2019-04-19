import React, { Component } from 'react';
import GuestForm from '../components/GuestForm'
import GuestList from '../components/GuestList'
import "./BookingStyle.css"


class GuestContainer extends Component {

  render(){
    return(
      <div className="BookingContainer">

        <div className="BookingContainerHeader">
          <h2>Guest Management</h2>
        </div>

        <div className="BookingFormContainer">
          < GuestForm handleNewGuest={this.props.handleNewGuest}/>
        </div>

        <div className ="panelDivider"></div>

        <div className="BookingListContainer">
          <GuestList guests = {this.props.guests} handleDeleteGuest= {this.props.handleDeleteGuest} />
        </div>
      </div>
    )
  }

}

export default GuestContainer;
