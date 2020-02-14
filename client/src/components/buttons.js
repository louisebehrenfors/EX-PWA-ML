import React, { Component } from 'react';
import './buttons.css';


function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('id', 'theLAW');
   // fileSelector.setAttribute("onchange", 'loadFile(event);' ); //function hello(){loadImage();}
    fileSelector.setAttribute('accept','image/*');
    console.log(fileSelector);
  
   // fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

class Buttons extends Component{
 constructor(props){
    super(props); 
    this.state = {cameraOpen: true};
    this.takePhotoClicked = this.takePhotoClicked.bind(this);
 }
 
componentDidMount () {
     console.log(this.props);
     this.fileSelector = buildFileSelector(); 
}



takePhotoClicked() {
    console.log("Photo button was clicked")
    this.setState({
        cameraOpen: true
    });
    this.props.takePhotoClicked(this.state.cameraOpen);
}

handleFileSelect = (e) => {
    e.preventDefault(); 
    this.fileSelector.click(); 
    
}

 render() {
     return (
        <div className="buttons">
        <button className="buttonClass" id="takephoto" onClick = {this.takePhotoClicked}>
        <h2>Ta ett foto</h2>   
        </button> 
        <input type="file" id="pictureUpload" accept="image/*"></input>
        <button className="buttonClass" onClick = {this.handleFileSelect}> <h2> Ladda upp en bild</h2> </button>
        <video id="video" autoPlay></video>
        <canvas id="canvas" ></canvas>
        </div>
     );
 }
}

export default Buttons;