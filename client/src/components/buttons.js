import React, { Component } from 'react';
import './buttons.css';

class Buttons extends Component{
 constructor(props){
    super(props); 
    this.state = {cameraOpen: true};
    this.takePhotoClicked = this.takePhotoClicked.bind(this);
    this.state = {file: '',imagePreviewUrl: ''};
 }

takePhotoClicked() {
    console.log("Photo button was clicked")
    this.setState({
        cameraOpen: true
    });
    this.props.takePhotoClicked(this.state.cameraOpen);
}


_handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

 render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return (
        <div className="buttons">
        <button className="buttonClass" id="takephoto" onClick = {this.takePhotoClicked}>
        <h2>Ta ett foto</h2>   
        </button> 
        <input type="file" id="pictureUpload" accept="image/*"></input>
        <button className="buttonClass" onClick = {this.handleFileSelect}> <h2> Ladda upp en bild</h2> </button>
        
        <form onSubmit={(e)=>this._handleSubmit(e)}>
          <input className="fileInput" 
            type="file" 
            onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" 
            type="submit" 
            onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
        </form>
        <div className="imgPreview">
          {$imagePreview}
        </div>

        <video id="video" autoPlay></video>
        <canvas id="canvas" ></canvas>
        </div>
     );
 }
}

export default Buttons;