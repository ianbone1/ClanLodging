

import React from 'react';
import Staff from './Staff';


const StaffList = (props) => {

const staffNodes = props.staffs.map((staff, index) =>{
  return (
    <Staff key={index}
    staff={staff}

    />
  )
})

  return (
    <div className="staff-list">
    <h3>Staff List</h3>
    {staffNodes}
    </div>
  );


}
export default StaffList;
