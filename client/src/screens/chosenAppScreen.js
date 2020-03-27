import React, { Component } from 'react';
import {checkOrientation} from './imageRotator';
import EXIF from 'exif-js';
class ChosenAppScreen extends Component {
    
    componentDidMount() {
        var canvas = document.getElementById('imgContainer');
        checkOrientation(this.props.imageFromParent,canvas);
    }
    render() {

        return(
        <div className="photoChosed">
            <canvas id="imgContainer" width="800" height="800"></canvas>
            {/*<img src= {imageAsURL} />*/}
            <button onClick={this.props.chosenPress} className="buttonClass"><h2>Välj denna bild</h2></button>
            <button onClick={this.props.cancelPress} className="buttonClass"><h2>Avbryt</h2></button>
        </div>
        ); 
    }
}

export default ChosenAppScreen; 