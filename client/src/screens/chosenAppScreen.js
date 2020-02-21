import React, { Component } from 'react';

// import Buttons from '../components/buttons.js';
// import Camera from '../components/camera.js';
// import ButtonTest from '../components/testButton';

class ChosenAppScreen extends Component {

    render() {
        return(
        <div className="photoChosed">
            <img src= {this.props.imageFromParent} />
            <button className="buttonClass"><h2>Välj denna bild</h2></button>
            <button onClick={this.props.cancelPress} className="buttonClass"><h2>Avbryt</h2></button>
        </div>
        ); 
    }
}

export default ChosenAppScreen; 