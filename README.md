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



Login







This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
