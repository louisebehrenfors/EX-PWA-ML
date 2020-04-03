import React, { Component } from "react";
import "./buttons.css";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = { cameraOpen: true };
    this.takePhotoClicked = this.takePhotoClicked.bind(this);
  }

  takePhotoClicked() {
    console.log("Photo button was clicked");
    this.setState({
      cameraOpen: true,
    });
    this.props.takePhotoClicked(this.state.cameraOpen);
  }

  render() {
    return (
      <div className="buttons">
        <button
          className="buttonClass"
          id="takephoto"
          onClick={this.takePhotoClicked}
        >
          <h2>Ta ett foto</h2>
        </button>
      </div>
    );
  }
}

export default Buttons;
