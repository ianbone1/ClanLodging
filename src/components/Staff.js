
import React from 'react';

const Staff =(props) => {
  return (
<div className="staff">
<p>{props.staff.firstname}</p>
<p>{props.staff.lastname}</p>
<p>{props.staff.addressline1}</p>
<p>{props.staff.town}</p>
<p>{props.staff.postcode}</p>
<p>{props.staff.email}</p>
<p>{props.staff.phone}</p>
<p>{props.staff.position}</p>
<button onClick = { () => { if (window.confirm('Are you sure you wish to remove this staff member?'))
props.handleDeleteStaff(props.staff.staffid)  } }
>Remove Staff Member</button>

</div>
  )
}
export default Staff;
