import React, { Component } from 'react';

import StaffForm from '../components/StaffForm'
import StaffList from '../components/StaffList'
import "./FormContainer.css"

class StaffContainer extends Component {

  render(){
    return(
      <div>
        <h2>Staff Management</h2>
        <div className="Form">
        <StaffForm handleNewStaff = {this.props.handleNewStaff}/>
        </div>
        <div className="StaffList">
        <StaffList staffs = {this.props.staffs}
        handleDeleteStaff = {this.props.handleDeleteStaff}/>
        </div>
      </div>

    )
  }

}

export default StaffContainer;
