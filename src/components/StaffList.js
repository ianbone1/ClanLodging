import React from 'react';
import Staff from './Staff';


const StaffList = (props) => {

const staffsNode = props.staffs.map((staff, index) =>{
  return (
    <li key = {index}>
    <div>
    <Staff staff = {staff}>
    </Staff>
    </div>
    </li>
  )
})

  return (
    <ul>
    <h4>Staff List</h4>
    {staffsNode}
    </ul>
  );


}
export default StaffList;
