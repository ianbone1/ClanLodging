import React, { Component } from 'react';
import StaffForm from '../components/StaffForm';
import StaffList from '../components/StaffList';
import "./BookingStyle.css";

class StaffContainer extends Component {

  render(){
    return(
      <div className="BookingContainer">

      <div className="BookingContainerHeader">
        <h2>Staff Management</h2>
      </div>

      <div className="BookingFormContainer">
        <StaffForm handleNewStaff = {this.props.handleNewStaff}/>
      </div>

      <div className ="panelDivider"></div>

      <div className="BookingListContainer">
        <StaffList staffs = {this.props.staffs}
        handleDeleteStaff = {this.props.handleDeleteStaff}/>
      </div>
    </div>
    )
  }

}

export default StaffContainer;
