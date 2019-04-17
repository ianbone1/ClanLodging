import React from 'react';
import Guest from './Guest';


const GuestList = (props) => {

const guestNodes = props.guests.map((guest, index) =>{
  return (
    <Guest key={index}
    guest={guest}
    handleDeleteGuest={props.handleDeleteGuest}
    />
  )
})

  return (
    <div className="guest-list">
    <h3>Guest Directory</h3>
    {guestNodes}
    </div>
  );


}
export default GuestList;
