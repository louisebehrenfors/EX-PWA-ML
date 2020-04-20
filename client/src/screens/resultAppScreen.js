import React, { Component } from "react";
import logo1 from "./logo1.svg";
import "./resultAppScreen.css";
import { checkOrientation } from "./imageRotator";
const $ = window.$;
const predictionKey = "";

class ChosenAppScreen extends Component {
  constructor() {
    super();
    this.state = {
      tagName: "",
      probability: "",
      ajaxComplete: false,
    };
    this.resultCanvasRef = React.createRef();
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount = () => {
    var self = this;
    var canvas = document.getElementById("resultCanvas");
    canvas.style.display = "none";
    checkOrientation(this.props.imageFromParent, canvas);
    var prop;
    $.ajax({
      type: "POST",
      url: "",
      processData: false,
      data: this.props.imageFromParent,
      headers: {
        "Prediction-Key": predictionKey,
        "Content-Type": "application/json",
      },
    })
      .done(function (data) {
        console.log(data);
        console.log(data.predictions[0].tagName);
        prop = (data.predictions[0].probability * 100).toFixed(0) + "%";
        self.setState({
          tagName: data.predictions[0].tagName,
          ajaxComplete: true,
          probability: prop,
        });
      })
      .fail(function (xhr, status, err) {
        alert(err, status, xhr);
      });
  };

  render() {
    //var imageAsURL = URL.createObjectURL(this.props.imageFromParent);
    var fp = this.props.imageFromParent;
    var fe = fp.slice(fp.length - 3);
    console.log("fe = " + fe);
    let content;

    if (this.state.ajaxComplete) {
      content = (
        <div>
          <h1>Resultat</h1>
          <h2> Jag tror det är följande : {this.state.tagName} </h2>
          <h3> Med sannolikhet: {this.state.probability}</h3>
        </div>
      );
    } else {
      content = (
        <div>
          <img alt="laddar" className="loadingImage" src={logo1} />
          <h3> laddar ... </h3>
        </div>
      );
    }
    return (
      <div className="resultContainer">
        {content}
        <canvas id="resultCanvas" height="800" width="800"></canvas>
        <button className="buttonClass" onClick={this.props.cancelPress}>
          <h2> Gå tillbaka </h2>
        </button>
      </div>
    );
  }
}

export default ChosenAppScreen;
