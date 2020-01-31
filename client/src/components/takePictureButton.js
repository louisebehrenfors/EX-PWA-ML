import React, { Component } from 'react';
import './takePictureButton.css';

class Buttons extends Component{
 constructor(){
     super(); 
     this.state = {
        items: [

        ]
     }

 }
 handleClick() {
     //TODO: lägg till här att när någon trycker på knappen så kommer en event specifik för vilken knapp som trycktes hända
     alert("Någon tryckte på mig")

 }


 render() {
     return (
         <button className="buttonClass" onClick = {this.handleClick}>
             <h1> {this.props.id}{this.props.name} </h1>
         </button> 

        
     );
 }
}

export default Buttons;