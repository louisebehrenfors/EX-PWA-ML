import React, { Component } from 'react';
import logo1 from './logo1.svg'; 

import './App.css';

import Buttons from './components/buttons.js';
import Camera from './components/camera.js';
import ButtonTest from './components/testButton';


class App extends Component {
  constructor () {
    super();
    this.state = {
      cameraOpen: false 
    };
    this.setCameraState = this.setCameraState.bind(this);
  }
  setCameraState(cameraState){
    //sets camera state according to what element was clicked
    this.setState({cameraOpen: cameraState});
    console.log(this.state.cameraOpen);
  }
  render() {
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
          <h1 className="App-title">Recycle Me!</h1>
        </header>
        <style>{'body { background-color: #499272; }'}</style>
        <div className = "App-content">
      
        {this.state.cameraOpen ? <Camera cancelClicked={this.setCameraState} displayCamera={this.setCameraState}/> : <Buttons takePhotoClicked={this.setCameraState}/>}
        <ButtonTest/>
        </div>
        <div className="App-footer">
          <p> Recycle Me PWA</p>
        </div>
      </div>
    );
  }
}

export default App;
