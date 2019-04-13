import React, { Component } from 'react';
import BookingForm from '../components/BookingForm';
import BookingList from '../components/BookingList';

class BookingContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      rooms: [
         {
          roomNumber: 22,
          roomType: "Twin",
          roomCapacity: 2,
          rate: 22.50,
          calendar:[],
          bookings: []
          },
         {
          roomNumber: 45,
          roomType: "Family",
          roomCapacity: 4,
          rate: 78.60,
          calendar:[],
          bookings: []
        }
      ],
      guests: [
          {
           personId: 5,
           firstName: "Kyle",
           lastName: "Johnston",
           addressLine1: "42 Wallaby Drive",
           town: "Sydney",
           postCode: "PA42",
           email: "email@email.com",
           phone: "0132825844"
        },
        {
         personId: 2,
         firstName: "Neil",
         lastName: "Watkins",
         addressLine1: "454 Glasgow Road",
         town: "Glasgow",
         postCode: "G23",
         email: "x@x.com",
         phone: "0384343"
      }
    ],
    bookings: [

    ]
    }
  }

  render(){
    return(
      <div>
        <h2>I am Booking Container</h2>
        <BookingForm rooms = {this.state.rooms} guests = {this.state.guests}/>
        <BookingList bookings = {this.state.bookings}/>
      </div>
    )
  }

}

export default BookingContainer;
