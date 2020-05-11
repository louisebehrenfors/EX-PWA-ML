import React, { Component } from 'react';

const test = (props) => {
    return (
        <button className="myTestButton"> <h2>{props.title}</h2></button>
    ); 
}

export default test; 

import React, { Component } from 'react';

import './testButton.css';

function _openFileSelector () {
    const createFileExplorer = document.createElement('input'); 
    createFileExplorer.setAttribute('type', 'file');
    createFileExplorer.setAttribute('accept', 'image/*');
    createFileExplorer.setAttribute('onChange','this._viewImage');
    return createFileExplorer; 
}

class testButton extends Component {
    _handleButtonClick = (e) => {
        e.preventDefault(); 
        this.createFileExplorer.click(); 
        //console.log(this.createFileExplorer);
        // this._openFileSelector (); 
    }
    _viewImage = () => {
        //console.log("Här");
    }
    componentDidMount = () => {
        this.createFileExplorer = _openFileSelector(); 
    }



    render() {
        return (
        <button className="submitButton" 
            onClick={this._handleButtonClick}
            >
            <h2>Knapp</h2>
        </button>

        );
    }

}


export default testButton; 