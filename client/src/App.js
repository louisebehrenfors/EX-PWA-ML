import React, { Component } from 'react';
import logo1 from './logo1.svg'; 

import './App.css';

import Buttons from './components/takePictureButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
          <h1 className="App-title">Recycle Me!</h1>
        </header>
        <style>{'body { background-color: #499272; }'}</style>
      { /* <Customers /> */ }
        <div className = "App-content">
        <Buttons name = "Ta en bild"/>
        <Buttons name = "Press button recieve bacon"/>
        </div>
      </div>
    );
  }
}

export default App;
