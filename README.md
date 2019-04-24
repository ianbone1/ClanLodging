# Clan Lodging

You have been approached by Clan Lodging to develop a Hotel Booking system for their new Hotel launching in Spring 2020. They are building a new 180 room hotel in a Highland location with state of the art facilities, Spa and Restaurant, all with fabulous views of the surrounding hills and countryside.

## MVP

The application will be used by Hotel Staff to make bookings and check guests into rooms. It should be able to handle different rooms types (Twin/Double/Family etc.) and be able to handle multiple rooms in a single booking. Hotel Occupancy should be tracked and reported on (for both room utilisation and room occupancy levels) as well as a running total of the financial status generated from the rooms.

Staff should be able to cancel or change booking reservations, as well as be able to Check Guests into the Hotel. Checkout should also incorporate settling the room bill.

All data should be persistent in a database.

## Extensions

Securing the application to validate access so only registered staff can use it. The login credentials should be the staff member’s face (to remove the requirement of remembering complicated passwords.). Assume all computers will have an attached webcam.

It would be nice to have a visual representation of the available rooms during the booking process, highlighting the rooms free of a particular type being requested on a particular duration. Layout plan of the hotel can be provided.

Automated booking integration via a standard set of API’s to clients like booking.com and Trivago, which responds to requests for available rooms and then can take automated bookings would be advantageous.

Occupancy reporting and financial status of the accounts could be represented graphically over time.

A restaurant table booking system would be a functional advantage. There are 35 tables in the restaurant, of various capacities (Layout can be provided on request). Bookings are allowed a 2 hour slot per booking. Operating hours from 5pm, last seating at 9:30pm.



## Objects

Person={
  personID: Long,
  firstName: String,
  lastName: String,
  addressLine1: String,
  town: String,
  postCode: String,
  email:String,
  phone:String
}

Guest={
  Extends Person
  guestID: Long
}

Staff={
  Extends Person
  staffID: Long,
  position: String
}

ENUM ROOMTYPE{
  SINGLE:1,
  TWIN:2,
  DOUBLE:2,
  FAMILY:4
}

Booking={
  bookingID: Long,
  dates=[Dates],
  guestID: Guest.guestID,
  partySize:Integer,
  roomID: Room.roomID,
  checkedIn: Boolean,
  rate:Float,
  billPaid:Boolean
}

Room{
  roomNumber: Integer,
  roomType: ROOMTYPE,
  roomCapacity: Integer,
  rate:Float,
  calendar:[],
  bookings: [Booking.bookingID]
}

Hotel={
  rooms:[Room],
  name:String,
  till:Float,
  staff:[Staff],
  bookings:[Booking]
}

## To Plot occupancy
empty calendar array
for every booking
  for every date in booking
    is date in calendar array?
      No: add date and partysize to calendar
      Yes: add partySize to existing data occupancy

Sort array by date
Get mindate and max date
for every date between min and max
  if does not exist in calendar, add it with 0 occupancy

## To Plot till
same as above, but store day rate.


## Containers:

. Hotel
.. CRUD Guest
.. CRUD Staff
.. CRUD bookings
.. Login screen
.. NavBar
.. Reporting
.. Login

## TODO

Clean code of console logs, organise files into folders. Work on extensions




##

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

## To start app

### `npm install` 

 To install dependencies

### `Launch API/DB`
 
 Initiate the DB with command `createdb hotelmanager3000 -U Postgres`
 Start API by running the HotelserverApplication found in the hotelserver folder then src/main/java/com.codeclan.hotelserver
 

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## To deploy

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



# ScreenShots

### Main bookings screen
<img width="1092" alt="Screenshot 2019-04-24 at 10 09 58" src="https://user-images.githubusercontent.com/17381454/56647469-6c908f80-6679-11e9-9030-b1560121b785.png">

### Checkin and OutScreen, dynamically updates as guests are checked in and out
<img width="1254" alt="Screenshot 2019-04-24 at 10 10 34" src="https://user-images.githubusercontent.com/17381454/56647477-71554380-6679-11e9-8bf2-eda5627231e3.png">

### Prepopulated booking edit screen
<img width="862" alt="Screenshot 2019-04-24 at 10 13 50" src="https://user-images.githubusercontent.com/17381454/56647654-b6797580-6679-11e9-999e-97ad99573c6a.png">
