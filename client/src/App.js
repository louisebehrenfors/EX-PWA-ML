import React, { Component } from 'react';
import logo1 from './logo1.svg'; 

import './App.css';

// import Buttons from './components/buttons.js';
// import Camera from './components/camera.js';
// import ButtonTest from './components/testButton';
import StartAppScreen from './screens/startAppScreen';
import ChosenAppScreen from './screens/chosenAppScreen';

class App extends Component {
  constructor () {
    super();
    this.state = {
      pictureOk: false,
    };
    this.changeScreen = this.changeScreen.bind(this); 
  }

  changeScreen = childData => {
    this.setState({
      pictureOk: true,
      filechosen: childData
    });
  }

  cancelPressed = () => {
    this.setState({
      pictureOk: false,
      filechosen: ''
    }); 
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
          {this.state.pictureOk ?   <ChosenAppScreen cancelPress={this.cancelPressed} imageFromParent = {this.state.filechosen}  /> : 
          <StartAppScreen onChangeScreen = {this.changeScreen} />   }
        </div>
        <div className="App-footer">
          <p> Recycle Me PWA</p>
        </div>
      </div>
    );
  }
}

export default App;
