import React, { Component } from 'react';

import StaffForm from '../components/StaffForm'
import StaffList from '../components/StaffList'

class StaffContainer extends Component {

  render(){
    return(
      <div>
      <h1>Staff Management</h1>
      <StaffForm handleNewStaff = {this.props.handleNewStaff}/>
      <StaffList staffs = {this.props.staffs}
      handleDeleteStaff = {this.props.handleDeleteStaff}/>

      </div>
    )
  }

}

export default StaffContainer;
