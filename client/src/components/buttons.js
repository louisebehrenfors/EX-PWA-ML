import React, { Component } from 'react';
import './buttons.css';

//function buildFileSelector(){
//    const fileSelector = document.createElement('input');
//    fileSelector.setAttribute('type', 'file');
//    fileSelector.setAttribute('multiple', 'multiple');
//    return fileSelector;
//}

class Buttons extends Component{
 constructor(props){
    super(props); 
    this.state = {cameraOpen: true};
    this.takePhotoClicked = this.takePhotoClicked.bind(this);
    this.fileSelector = this.buildFileSelector.bind(this);
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


handleClickFile() {

    alert("uppladdningsknapp tryckt")
}

handleFileSelect = (e) => {
    e.preventDefault(); 
    this.fileSelector.click(); 
}
buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

 render() {
     return (
        <div className="buttons">
        <button className="buttonClass" id="takephoto" onClick = {this.takePhotoClicked}>
        <h2>Ta ett foto</h2>   
        </button> 
        <button className="buttonClass" onClick = {this.handleFileSelect}> <h2> Ladda upp en bild</h2> </button>
        <video id="video" autoPlay></video>
        <canvas id="canvas" ></canvas>
        </div>
     );
 }
}

export default Buttons;