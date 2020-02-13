import React, { Component } from 'react';
import './buttons.css';

class Buttons extends Component{
 constructor(props){
    super(props); 
    this.state = {cameraOpen: true};
    this.takePhotoClicked = this.takePhotoClicked.bind(this);
 }

 
componentDidMount () {
     console.log(this.props);
}
takePhotoClicked() {
    console.log("Photo button was clicked")
    this.setState({
        cameraOpen: true
    });
    this.props.takePhotoClicked(this.state.cameraOpen);
}

handleClickPhoto() {
    this.props.setState({cameraOpen: true})
    var video = document.getElementById('video');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var buttons = document.getElementsByClassName('buttonClass');

    video.classList.add("active");
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
    } 
    // Get access to the camera!
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
            //video.src = window.URL.createObjectURL(stream);
            video.srcObject = stream;
            video.play();
        });

    }
    document.getElementById("takephoto").addEventListener("click", function() {
    context.drawImage(video, 0, 0, 640, 480);
});


 }
handleClickFile() {

    alert("uppladdningsknapp tryckt")
}

 render() {
     return (
        <div className="buttons">
        <button className="buttonClass" id="takephoto" onClick = {this.takePhotoClicked}>
        <h1>Ta ett foto</h1>   
        </button> 
        <button className="buttonClass" onClick = {this.handleClickFile}> <h2> Ladda upp en bild</h2> </button>
        <video id="video" autoPlay></video>
        <canvas id="canvas" ></canvas>
        </div>
     );
 }
}

export default Buttons;