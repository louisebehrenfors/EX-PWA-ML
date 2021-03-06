import React, { Component } from "react";
import "./camera.css";

class Camera extends Component {
  constructor(props) {
    super(props);
    //cameraOpen states if the camera is open or closed, pictureTaken if a picture was taken or not, view decides what text to put on the button
    this.state = { cameraOpen: false, pictureTaken: false, file: "" };
    this.cancelClicked = this.cancelClicked.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.callbackFile = this.callbackFile.bind(this);
  }
  cancelClicked() {
    //set state, was cancel clicked
    //console.log("Cancel button clicked");
    this.setState({
      cameraOpen: false,
      pictureTaken: false,
    });
    this.props.cancelClicked(this.state.cameraOpen);
  }

    takePictureClicked() {
        //sets state, if the picture button was clicked or not 
        //console.log("Take picture button clicked");
        this.setState({
            pictureTaken: true
        });
    }
    savePicture() {
        this.setState({cameraOpen : false});
    }
    stopVideoStream(videoStream) {
        videoStream = document.getElementById('cameraStream');
        //console.log("Here");
        videoStream.srcObject.getVideoTracks().forEach(track => track.stop());
    }
    URLtoBlob(URL) {
        fetch(URL).then(res => res.blob()).then(blob => this.callbackFile(blob));
    }
    playVideo() {
        //plays a video stream and takes a picture or cancels the operation depending on what button was pressed 
        const video = document.getElementById('cameraStream');
        var videoConstraints = {
            video: {facingMode: "environment"} 
        };
        video.setAttribute('autoplay',true);
        video.setAttribute('muted',true);
        video.setAttribute('playsinline',true);
        var isVideoPlaying = false;
        const cancelButton = document.getElementById('cancel');
        const pictureButton = document.getElementById('takePicture');
        const savePictureButton = document.getElementById('savePicture');
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        navigator.mediaDevices.getUserMedia(videoConstraints).then((stream) => {
            video.srcObject = stream;
            isVideoPlaying = true;
        }).catch(function(err){
                //console.log(err);
                alert('Du har inte gett tillåtelse att använda kameran');

        });
         pictureButton.addEventListener('click', () => {
             if(!this.state.pictureTaken && isVideoPlaying) {
                 //console.log("video width = " + video.videoWidth + " video height = " + video.videoHeight);
                 var scale = Math.min(canvas.width / video.videoWidth, canvas.height / video.videoHeight);
                 var x = (canvas.width / 2) - (video.videoWidth / 2) * scale;
                 var y = (canvas.height / 2) - (video.videoHeight / 2) * scale;
                 //console.log("scale = " + scale);
                 this.takePictureClicked();
                 canvas.style.display = "block";
                 video.style.display = "none";
                 context.drawImage(video,x,y,video.videoWidth,video.videoHeight);
                 var imgURL = canvas.toDataURL();
                 //console.log("imageURL = " + imgURL);
                 //console.log("imgurl type = ",typeof imgURL);
                 this.URLtoBlob(imgURL);
                 this.stopVideoStream(video);
                 pictureButton.style.display = "none";
                 savePictureButton.style.display = "block";
             } 
         });

    savePictureButton.addEventListener("click", () => {
      this.savePicture();
      var imgURL = canvas.toDataURL();
      //console.log("imageURL = " + imgURL);
      //console.log("imgurl type = ", typeof imgURL);
      this.URLtoBlob(imgURL);
    });

    cancelButton.addEventListener("click", () => {
      //console.log("isVideoPlaying = " + isVideoPlaying);
      if (isVideoPlaying) {
        this.stopVideoStream(video);
        isVideoPlaying = false;
      }

      this.cancelClicked();
    });
  }
  componentDidMount() {
    this.playVideo();
  }

  callbackFile = (sendData) => {
    this.setState({
      file: sendData,
    });
    //console.log("sendData = " + sendData);
    this.props.parentCallBack(sendData);
  };

  render() {
    return (
      <div className="cameraWrapper">
        <video id="cameraStream" muted="muted" autoPlay></video>
        <canvas id="canvas" width="750" height="450"></canvas>
        <button className="cameraButtons" id="takePicture">
          {" "}
          Ta bild{" "}
        </button>
        <button className="cameraButtons" id="savePicture">
          {" "}
          Spara bild{" "}
        </button>
        <button className="cameraButtons" id="cancel">
          Avbryt
        </button>
      </div>
    );
  }
}

export default Camera;
