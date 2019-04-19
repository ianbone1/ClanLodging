import React from 'react';
import Guest from './Guest';
import './InputForm.css';


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
    <div>
    <div  className="formHeader">
    <h3>Guest Directory</h3>
    </div>
    <div className="formBody">
    {guestNodes}
    </div>
    </div>
  );


}
export default GuestList;
