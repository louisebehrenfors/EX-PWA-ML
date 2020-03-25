import React, { useState, Component } from 'react';

import './testButton.css';
import EXIF from 'exif-js';

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
    checkOrientation(file) {
        //checks EXIF orientation data of jpg files and changes it to the correct one 
            EXIF.getData(file, function() {
                var orientation = EXIF.getTag(this, "Orientation");
                if(orientation != 1){
                    //TODO: fix orientation
                    switch(orientation) {
                        case 2:
                            // flip vertically
                        case 3:
                            // rotate 180 deg
                        case 4:
                            // flip horizontally  
                        case 5:
                            // flip  
                        case 6:
                            // rotate 90 deg
                        case 7:
                            //flip
                        case 8:
                            //rotate -90 deg

                    }
                    console.log("EXIF information = "+ EXIF.pretty(this));
                }
                else console.log("Correct orientation");
            });
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
        var fp = target.value;
        var fe = fp.slice(fp.length - 3);
        if(fe == "jpg")
            this.checkOrientation(files);

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
                <input 
                    type="file" 
                    id="file" 
                    ref="fileUploader" 
                    accept="image/*" 
                    onChange={this.handleChange}/>
                </button>   
            </div>
        ); 
    }

}

export default testButton;