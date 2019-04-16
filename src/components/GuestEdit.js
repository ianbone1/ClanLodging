import React from 'react';
import Guest from './Guest';


const GuestEdit = ({guests}) => {

const guestNodes = guests.map((guest, index) =>{
  return (
    <Guest key={index}
    firstName={guest.firstname}
    lastName={guest.lastname} addressLine1={guest.addressline1}
    town={guest.town}
    postCode={guest.postcode}
    email={guest.email}
    phone={guest.phone}></Guest>
  )
})

  return (
    <div className="guest-list">
    {guestNodes}
    </div>
  );


}
export default GuestList;
