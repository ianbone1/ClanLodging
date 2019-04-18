import React from 'react';
import Staff from './Staff';
import '../containers/FormContainer.css'

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
    <ul>
    <h4>Staff List</h4>
    {staffNodes}
    </ul>
  );


}
export default StaffList;
