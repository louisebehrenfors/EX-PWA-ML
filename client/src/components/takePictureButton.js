import React, { Component } from 'react';
import Camera from 'react-html5-camera-photo';
import './takePictureButton.css';

class Buttons extends Component{
 constructor(){
     super(); 
     this.state = {

     };
 }
 handleButton(){
     alert("knappen tryckt");
 }

 
 render() {
     return (
         <button className="buttonClass" onClick={this.handleButton}>
             <h3> Take a picture </h3>
         </button> 
         

     );
 }
}

export default Buttons;