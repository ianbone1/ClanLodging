
import React from 'react';

const Staff =(props) => {
  return (
<div className="staff">
<p>{props.firstName}</p>
<p>{props.lastName}</p>
<p>{props.addressLine1}</p>
<p>{props.town}</p>
<p>{props.postCode}</p>
<p>{props.email}</p>
<p>{props.phone}</p>
<p>{props.position}</p>
<button>Edit</button>

</div>
  )
}
export default Staff;
