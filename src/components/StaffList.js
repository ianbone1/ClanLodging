import React from 'react';
import Staff from './Staff';
import './InputForm.css';

const StaffList = (props) => {

const staffNodes = props.staffs.map((staff, index) =>{
  return (
    <div key={index} className="Form">
    <Staff staff={staff}
    handleDeleteStaff={props.handleDeleteStaff}
    />
    </div>
  )
})

  return (
    <div>
      <div className="formHeader">
        <h3>Staff List</h3>
        </div>
        <div className="formBody">
        {staffNodes}
      </div>
    </div>
  );


}
export default StaffList;
