import React, { Component } from 'react';
import logo1 from './logo1.svg';
import'./resultAppScreen.css'

const $ = window.$;
const predictionKey = "";


class ChosenAppScreen extends Component {
    constructor () {
        super();
        this.state = {
          tagName: "",
          probability: "",
          ajaxComplete: false
        };

        this.componentDidMount = this.componentDidMount.bind(this); 
      }
    componentDidMount = () => {
      var self = this; 
      var prop; 
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
             prop = (data.predictions[0].probability * 100).toFixed(0) +"%";
              self.setState({
                  tagName: data.predictions[0].tagName,
                  ajaxComplete: true,
                  probability: prop
              });


         }).fail(function (xhr, status, err) {
            alert(err,status,xhr);
         });
    }

    render() {
        var imageAsURL = URL.createObjectURL(this.props.imageFromParent);
        let content; 

        if(this.state.ajaxComplete){
            
         content =    <div>
                <h1>Resultat</h1>
                <h2> Jag tror det är följande : {this.state.tagName} </h2>
                <h3> Med sannolikhet: {this.state.probability}</h3>
                <img alt="resultat" src= {imageAsURL} />
            </div>
            
            
        
        }
        else{
            content = <div>
                <img alt="laddar" className="loadingImage" src ={logo1}/>
                <h3> laddar ... </h3>
            </div>
             
        }
        return(
        <div className="resultContainer">
            {content}
            <button className="buttonClass" onClick={this.props.cancelPress} ><h2> Gå tillbaka </h2></button>
        </div>
        ); 
    }
}

export default ChosenAppScreen; 