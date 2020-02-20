import React, { Component } from 'react';

import Buttons from '../components/buttons.js';
import Camera from '../components/camera.js';
import ButtonTest from '../components/testButton';
import './startAppScreen.css';

class StartScreen extends Component {
    constructor () {
        super();
        this.state = {
          cameraOpen: false, 
          message: ""
        };
        this.setCameraState = this.setCameraState.bind(this);
        this.callbackFunction = this.callbackFunction.bind(this);
     
      }
      setCameraState(cameraState){
        //sets camera state according to what element was clicked
        this.setState({cameraOpen: cameraState});
        console.log(this.state.cameraOpen);
      }

      callbackFunction = (childData) => {
          this.setState({message: childData})
          console.log("här r vi"+this.state.message); 
      }
    render() {
        return(
            <div className="StartScreen">
                {this.state.cameraOpen ? <Camera cancelClicked={this.setCameraState} displayCamera={this.setCameraState}/> : <Buttons takePhotoClicked={this.setCameraState}/>}
                <ButtonTest parentCallback = {this.callbackFunction}/>
            </div>
        ); 
    }
}

export default StartScreen;