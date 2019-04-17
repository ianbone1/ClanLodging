import React from 'react';
import Staff from './Staff';


const StaffList = (props) => {

const staffNodes = props.staff.map((staff, index) =>{
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


// const BookingList = (props) => {
//   // Filters and removes checked in bookings
//
//   const notCheckedIn = props.bookings.filter((booking) => booking.checkedin === false)
//   const bookingsNode = notCheckedIn.map((booking, index) =>  {
//     return (
//       <li key = {index}>
//         <div>
//           <Booking booking={booking} handleDeleteBooking = {props.handleDeleteBooking} handleEditBooking = {props.handleEditBooking}/>
//         </div>
//       </li>
//     )
//   })
//
//
//
//     return(
//       <ul>
//         <h4>Upcoming Bookings</h4>
//         {bookingsNode}
//       </ul>
//     )
// }
//
// export default BookingList;
