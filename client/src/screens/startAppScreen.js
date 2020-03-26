import React, { Component } from 'react';

import Buttons from '../components/buttons.js';
import Camera from '../components/camera.js';
import ButtonTest from '../components/fileHandeler';
import './startAppScreen.css'

class StartScreen extends Component {
    constructor () {
        super();
        this.state = {
          cameraOpen: false, 
          fileChosen: ""
        };
        this.setCameraState = this.setCameraState.bind(this);
        this.callbackFunction = this.callbackFunction.bind(this);
     
      }
      setCameraState(cameraState){
        //sets camera state according to what element was clicked
        this.setState({cameraOpen: cameraState});
      }

      callbackFunction = (childData) => {
          this.setState({fileChosen: childData})
          this.props.onChangeScreen(childData);
      }

    render() {
        return(
            <div className="StartScreen">
                {this.state.cameraOpen ? <Camera cancelClicked={this.setCameraState} displayCamera={this.setCameraState} parentCallBack = {this.callbackFunction}/> :  <Buttons takePhotoClicked={this.setCameraState}/>}
                <ButtonTest parentCallBack = {this.callbackFunction}/>
                <img src = {this.state.fileChosen} />
            </div>
        ); 
    }
}

export default StartScreen;