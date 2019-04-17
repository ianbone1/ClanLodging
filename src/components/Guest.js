import React from 'react';

const Guest =(props) => {
  return (
<div className="guest">
<p>{props.firstname}</p>
<p>{props.lastname}</p>
<p>{props.addressline1}</p>
<p>{props.town}</p>
<p>{props.postcode}</p>
<p>{props.email}</p>
<p>{props.phone}</p>
<button>Edit</button>

</div>
  )
}
export default Guest;
