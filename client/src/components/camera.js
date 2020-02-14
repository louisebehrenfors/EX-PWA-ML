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
        canvas.style.display = "block";
        video.style.display = "none";
        canvas.style.width = video.innerWidth;
        canvas.style.height = video.innerHeight;
        context.drawImage(video,0,0,canvas.width,canvas.height);
        video.srcObject.getVideoTracks().forEach(track => track.stop());
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
            <video id="cameraStream" autoPlay></video>
            <canvas id="canvas" width="1000" height="500"></canvas>
            <button className="cameraButtons" id="takePicture"> Ta bild!</button> 
            <button className="cameraButtons" id="cancel">Avbryt</button>
            </div>
        );

    }

}

export default Camera;