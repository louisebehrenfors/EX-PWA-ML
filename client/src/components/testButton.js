import React, { useState, Component } from 'react';

import './testButton.css';

class testButton extends Component{
   
    constructor (props) {
        super(props);
        this._handleButtonClick = this._handleButtonClick.bind(this);
        this.state = {
            file : '',
            test : null,
            fileSelected: false
        }
        this.handleChange = this.handleChange.bind(this); 
        this.callBackParent = this.callBackParent.bind(this);
      }
      _handleButtonClick = (e) => {
       this.refs.fileUploader.click();
    }

    handleChange(event){
       let target = event.target; 
       console.log(target.value.length);
       if(target.value.length === 0) {
           this.setState(() => ({ file: null, fileSelected:false }));
       }
       else{
        this.setState({
            test: event.target.files[0]
        });
        
        let files = event.target.files[0];
        var fileReader = new FileReader(); 
        fileReader.readAsDataURL(files);

        // this.setState({
        //     test: 'hallo!'
        // });
        //this.setState({file: 'fileReader.result'});
        files = URL.createObjectURL(files);
        //this.props.parentCallBack("Hallo");
        // this.setState({file: window.URL.createObjectURL(files)}); 
        // this.setState(() => ({ 
        //     file: files,
        //     fileSelected: true 
        // }));
        this.callBackParent(files);
       }
    }

    callBackParent = sendData => {
        this.setState({
            file: sendData
        });
        this.props.parentCallBack(sendData);
    }

    render () {
        return (
            <div>
                <button className="submitButton" 
                onClick={this._handleButtonClick}
                >
                <h2>Ladda upp en bild</h2>
                <input type="file" id="file" ref="fileUploader" onChange={this.handleChange}/>
                </button>   
                {/* <img src = {this.state.file} /> */}
            </div>
        ); 
    }

}

export default testButton;