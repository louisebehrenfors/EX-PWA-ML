import React, { Component } from 'react';
import './chosenAppScreen.css'

class ChosenAppScreen extends Component {

   
    render() {
        var imageAsURL = URL.createObjectURL(this.props.imageFromParent);
        return(
        <div className="Chosen-Container">
            <img alt="din bild" src= {imageAsURL} />
            <button onClick={this.props.chosenPress} className="buttonClass"><h2>Välj denna bild</h2></button>
            <button onClick={this.props.cancelPress} className="buttonClass"><h2>Avbryt</h2></button>
        </div>
        ); 
    }
}

export default ChosenAppScreen; 