
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
<button>Edit</button>

</div>
  )
}
export default Staff;
