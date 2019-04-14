import React from 'react';

const Guest =(props) => {
  return (
<div className="guest">
<p>{props.firstName}</p>
<p>{props.lastName}</p>
<p>{props.addressLine1}</p>
<p>{props.town}</p>
<p>{props.postCode}</p>
<p>{props.email}</p>
<p>{props.phone}</p>
<button>Edit</button>

</div>
  )
}
export default Guest;
