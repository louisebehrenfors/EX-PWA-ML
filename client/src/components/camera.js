import React, { Component } from 'react';
import './camera.css'

class Camera extends Component {
    constructor (props) {
        super(props);
        this.state = { cameraOpen: false }
        this.cancelClicked = this.cancelClicked.bind(this);
    }
    cancelClicked () {
        console.log("Cancel button clicked");
        this.setState({
            cameraOpen: false
        });
        this.props.cancelClicked(this.state.cameraOpen);
        
    }
playVideo() {
    //plays a video stream and takes a picture or cancels the operation depending on what button was pressed 
    const video = document.getElementById('cameraStream');
    const cancelButton = document.getElementById('cancel');
    const pictureButton = document.getElementById('takePicture');
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    pictureButton.addEventListener('click', () => {
        video.srcObject.getVideoTracks().forEach(track => track.stop());
        canvas.style.display = "block";
        video.style.display = "none";
        context.drawImage(video,0,0,canvas.width,canvas.height);
    });
    cancelButton.addEventListener('click', () => {
        video.srcObject.getVideoTracks().forEach(track => track.stop());
        this.cancelClicked();
    });
    navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
       video.srcObject = stream;
    });


}
componentDidMount(){
    this.playVideo();
}
    
    render () {
        return (
            <div className="cameraWrapper">
            <video id="cameraStream" width="800" height="600" autoPlay></video>
            <canvas id="canvas" height="800" width="600"></canvas>
            <button className="cameraButtons" id="takePicture"> foto</button> 
            <button className="cameraButtons" id="cancel">Avbryt</button>
            </div>
        );

    }

}

export default Camera;