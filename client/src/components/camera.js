import React, { Component } from 'react';
import './camera.css'

class Camera extends Component {
    constructor (props) {
        super(props);
        this.state = { cameraOpen: false }
        this.cancelClicked = this.cancelClicked.bind(this);
    }
    takePictureClicked () {
        alert("picture taken clicked!");
    }
    cancelClicked () {
        console.log("Cancel button clicked");
        this.setState({
            cameraOpen: false
        });
        this.props.cancelClicked(this.state.cameraOpen);
    }
    
    componentDidMount() {
        var video = document.getElementById('cameraStream');
            if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
                    //video.src = window.URL.createObjectURL(stream);
                    video.srcObject = stream;
                    video.play();
                });
        }   
    }
       
    render () {
        return (
            <div className="cameraWrapper">
            <video id="cameraStream" width="800" height="600" autoPlay></video>
            {/*<canvas id="canvas" height="800" width="600"></canvas> */}
            <button className="cameraButtons" id="takePicture" onClick={this.takePictureClicked}>Ta foto</button> 
            <button className="cameraButtons" id="cancel" onClick={this.cancelClicked}>Avbryt</button>
            </div>
        );

    }

}
export default Camera;