import React, { Component } from 'react';
// import FaceID from './containers/FaceID.js'
import HotelContainer from './containers/HotelContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HotelContainer/>
      </div>
    );
  }
}

export default App;
