import React, { Component } from 'react';
const $ = window.$;
const predictionKey = ""; 


class ChosenAppScreen extends Component {

    componentDidMount = () => {
 
        console.log("this.props.imageFromParent = ",typeof this.props.imageFromParent);
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

         }).fail(function (xhr, status, err) {
            alert(err,status,xhr);
         });
    }

    render() {
        return(
        <div className="resultContainer">
            <h1> Resultat </h1>
            <img src= {this.props.imageFromParent} />
            <button><h2> Gå tillbaka </h2></button>
        </div>
        ); 
    }
}

export default ChosenAppScreen; 