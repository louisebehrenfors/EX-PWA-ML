import React, { Component } from 'react';
import './takePictureButton.css';

class Buttons extends Component{
 constructor(){
     super(); 
     this.state = {

     }
 }


 render() {
     return (
         <button className="buttonClass">
             <h3> Take a picture </h3>
         </button> 

        
     );
 }
}

export default Buttons;