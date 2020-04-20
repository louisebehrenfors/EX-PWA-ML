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
  }
  render() {
    return (
      <div className="Chosen-Container">
        <canvas id="imgContainer" width="800" height="800"></canvas>
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
