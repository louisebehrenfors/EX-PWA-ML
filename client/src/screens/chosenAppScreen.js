import React, { Component } from 'react';

// import Buttons from '../components/buttons.js';
// import Camera from '../components/camera.js';
// import ButtonTest from '../components/testButton';

class ChosenAppScreen extends Component {

    render() {
        return(
        <div className="photoChosed">
            <button className="buttonClass"><h2>Välj denna bild</h2></button>
            <button className="buttonClass"><h2>Avbryt</h2></button>
        </div>
        ); 
    }
}

export default ChosenAppScreen; 