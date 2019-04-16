import React from 'react';
import Staff from './Staff';


const StaffList = ({staffs}) => {

const staffNodes = staffs.map((staff, index) =>{
  return (
    <Staff key={index}
    firstName={staff.firstName}
    lastName={staff.lastName} addressLine1={staff.addressLine1}
    town={staff.town}
    postCode={staff.postCode}
    email={staff.email}
    phone={staff.phone}
    position={staff.position}>
    </Staff>
  )
})

  return (
    <div className="staff-list">
    {staffNodes}
    </div>
  );


}
export default StaffList;
