import React, { Component } from 'react';
const $ = window.$;
const predictionKey = ""; 


class ChosenAppScreen extends Component {
    constructor () {
        super();
        this.state = {
          tagName: "",
          probability: "",
        };

        this.componentDidMount = this.componentDidMount.bind(this); 
      }
    componentDidMount = () => {
      var self = this; 
         $.ajax({
            type: "POST",
            url: "",
            processData: false,
            data: this.props.imageFromParent,
            headers: {
                "Prediction-Key": predictionKey,
                "Content-Type": "application/json"
             }
         }).done(function (data) {
             console.log(data); 
             console.log(data.predictions[0].tagName);

              self.setState({
                  tagName: data.predictions[0].tagName,
                  probability:data.predictions[0].probability
              });


         }).fail(function (xhr, status, err) {
            alert(err,status,xhr);
         });
    }

    render() {
        var imageAsURL = URL.createObjectURL(this.props.imageFromParent);
        return(
        <div className="resultContainer">
            <h1> Resultat </h1>
            <h2> Jag tror det är följande : {this.state.tagName} </h2>
            <h3> Med sannolikhet: {this.state.probability}</h3>
            <img src= {imageAsURL} />
            <button className="buttonClass"><h2> Gå tillbaka </h2></button>
        </div>
        ); 
    }
}

export default ChosenAppScreen; 