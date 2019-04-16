import React, { Component } from 'react';

import StaffForm from '../components/StaffForm'
import StaffList from '../components/StaffList'

class StaffContainer extends Component {

constructor(props){
  super(props);
  this.state={
    staffs:[
      { staffID: 1, firstName: "Basil",lastName: "Faulty",  addressLine1: "Fawlty Towers", town: "Torquay", postCode: "TQ3 2EP", email: "BF@gmail.com", phone:"01803 111111", position:"Manager"},
      { staffID: 2, firstName: "Manuel",lastName: "Que",  addressLine1: "Fawlty Towers", town: "Barcelona", postCode: "TQ3 2EP", email: "mq@gmail.com", phone:"01803 888888", position:"Waiter"}
    ]
  }
}




  render(){
    return(
      <div>
      <h1>I am the Staff Container</h1>
      <StaffForm/>
      <StaffList staffs = {this.state.staffs}/>

      </div>
    )
  }

}

export default StaffContainer;
