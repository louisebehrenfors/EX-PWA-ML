import React, { Component } from "react";
import "./chosenAppScreen.css";

import { checkOrientation } from "./imageRotator";
class ChosenAppScreen extends Component {
  constructor() {
    super();
    this.state = {
      widthOfScreen:"",
      heightOfScreen:"",
    };
  }

  componentDidMount() {
    var canvas = document.getElementById("imgContainer");

    checkOrientation(this.props.imageFromParent, canvas);
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
  }
  render() {
    return (
      <div className="Chosen-Container">
        <canvas id="imgContainer" width="750" height="450"></canvas>
        <button onClick={this.props.chosenPress} className="buttonClass">
          <h2>Välj denna bild</h2>
        </button>
        <button onClick={this.props.cancelPress} className="buttonClass">
          <h2>Avbryt</h2>
        </button>
      </div>
    );
  }
}

export default ChosenAppScreen;
