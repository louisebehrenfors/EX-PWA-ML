import React, { Component } from 'react';
import './camera.css'

class Camera extends Component {
    constructor (props) {
        super(props);
        //cameraOpen states if the camera is open or closed, pictureTaken if a picture was taken or not, view decides what text to put on the button
        this.state = { cameraOpen: false, pictureTaken: false};
        this.cancelClicked = this.cancelClicked.bind(this);
        this.playVideo = this.playVideo.bind(this);
    }
    cancelClicked () {
        //set state, was cancel clicked
        console.log("Cancel button clicked");
        this.setState({
            cameraOpen: false,
            pictureTaken: false
        });
        this.props.cancelClicked(this.state.cameraOpen);
        
    }

    takePictureClicked() {
        //sets state, if the picture button was clicked or not 
        console.log("Take picture button clicked");
        this.setState({
            pictureTaken: true
        });
    }
    savePicture() {
        alert('Image saved!');
        this.setState({cameraOpen : false});
    }
    playVideo() {
       //plays a video stream and takes a picture or cancels the operation depending on what button was pressed 
       const video = document.getElementById('cameraStream');
       var isVideoPlaying = false;
       const cancelButton = document.getElementById('cancel');
       const pictureButton = document.getElementById('takePicture');
       const savePictureButton = document.getElementById('savePicture');
       const canvas = document.getElementById('canvas');
       const context = canvas.getContext('2d');
       navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {
           video.srcObject = stream;
           isVideoPlaying = true;
       });
        pictureButton.addEventListener('click', () => {
            if(!this.state.pictureTaken && isVideoPlaying){
                this.takePictureClicked();
                canvas.style.display = "block";
                video.style.display = "none";
                context.drawImage(video,0,0);
                video.srcObject.getVideoTracks().forEach(track => track.stop());
                pictureButton.style.display = "none";
                savePictureButton.style.display = "block";
            } 
        });

        savePictureButton.addEventListener('click', () => {
            this.savePicture();

        });

        cancelButton.addEventListener('click', () => {
           if(isVideoPlaying){
            video.srcObject.getVideoTracks().forEach(track => track.stop());
            isVideoPlaying = false;
           }

           this.cancelClicked();
       });
      
    }
componentDidMount(){
    this.playVideo();
}
    
    render () {
        return (
            <div className="cameraWrapper">
            <video id="cameraStream" muted="muted" autoPlay></video>
            <canvas id="canvas" width="751" height="450"></canvas>
            <button className="cameraButtons" id="takePicture"> Ta bild </button> 
            <button className="cameraButtons" id="savePicture"> Spara bild </button>
            <button className="cameraButtons" id="cancel">Avbryt</button>
            </div>
        );

    }

}

export default Camera;