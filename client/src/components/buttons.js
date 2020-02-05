import React, { Component } from 'react';
import './buttons.css';

class Buttons extends Component{
 constructor(){
     super(); 
     this.state = {
     }

 }
 handleClickPhoto() {
    alert("Fotoknapp tryckt")
 }
handleClickFile() {

    alert("uppladdningsknapp tryckt")
}

 render() {
     return (
         <div id="buttons">
         <button className="buttonClass" onClick = {this.handleClickPhoto}>
         <h1>Ta ett foto</h1>   
         </button> 
         <button className ="buttonClass" onClick = {this.handleClickFile}> <h2> Ladda upp en bild</h2> </button>
         </div>
     );
 }
}

export default Buttons;