import React, { Component } from 'react';

import './testButton.css';

class testButton extends Component{
    constructor (props) {
        super(props);
        this._handleButtonClick = this._handleButtonClick.bind(this);
        this.state = {
            file : null,
            fileSelected: false
        }
        this.handleChange = this.handleChange.bind(this);
      }
      _handleButtonClick = (e) => {
       this.refs.fileUploader.click();
    }

    handleChange(event){
       let target = event.target; 
       if(target.value.length === 0) {
           this.setState(() => ({ file: null, fileSelected:false }));
       }
       else{
        let file = event.target.files[0];
        file = URL.createObjectURL(file);
        this.setState(() => ({ 
            file: file,
            fileSelected: true 
        }));
       }
    }

    render () {
        return (
            <div>
                {/* <button className="submitButton" 
                onClick={this._handleButtonClick}
                >
                <h2>Ladda upp en bild</h2>
                <input type="file" id="file" ref="fileUploader" onChange={this.handleChange}/>
                </button>            */}
                {this.state.fileSelected ? <button className="submitButton"> <h2>Välj denna bild</h2></button> :                
                <button className="submitButton" 
                onClick={this._handleButtonClick}
                >
                <h2>Ladda upp en bild</h2>
                <input type="file" id="file" ref="fileUploader" onChange={this.handleChange}/>
                </button>   
                
                }
                <img src = {this.state.file} />
            </div>
        ); 
    }

}

export default testButton;