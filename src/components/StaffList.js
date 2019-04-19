import React from 'react';
import Staff from './Staff';
import './InputForm.css';

const StaffList = (props) => {

const staffNodes = props.staffs.map((staff, index) =>{
  return (
    <Staff key={index}
    staff={staff}
    handleDeleteStaff={props.handleDeleteStaff}
    />
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
