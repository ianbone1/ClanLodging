import React from 'react';
import Guest from './Guest';


const GuestList = ({guests}) => {

const guestNodes = guests.map((guest, index) =>{
  return (
    <Guest key={index}
    firstName={guest.firstName}
    lastName={guest.lastName} addressLine1={guest.addressLine1}
    town={guest.town}
    postCode={guest.postCode}
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
