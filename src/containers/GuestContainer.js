import React, { Component } from 'react';

import GuestForm from '../components/GuestForm'
import GuestList from '../components/GuestList'

class GuestContainer extends Component {

constructor(props){
  super(props);
  this.state={
    guests:[
      { personid: 1, firstname: "Brian",lastName: "Ferry",  addressLine1: "The Big House", town: "Glasgow", postCode: "G45 4XT", email: "BFerry@gmail.com", phone:"0141 333444"}
    ]
  }
}




  render(){
    return(
      <div>
      <h1>I am the Guest Container</h1>
      <GuestForm/>
      <GuestList guests = {this.state.guests}/>

      </div>
    )
  }

}

export default GuestContainer;
