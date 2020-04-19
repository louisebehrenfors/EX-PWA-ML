import React, { Component } from 'react';
import './footerMenu.css'
import button1image from './homeimage.svg'
import button2image from './mapsButtonImage.svg'
import button3image from './infoButtonImage.svg'

class footerMenu extends Component {
    constructor () {
        super();
        this.state = {
          whichButtonPressed: ""
        };
        this.homeButtonPressed = this.homeButtonPressed.bind(this);
        this.infoButtonPressed = this.infoButtonPressed.bind(this);
        this.mapsButtonPressed = this.mapsButtonPressed.bind(this);
      }
    homeButtonPressed = () => {
        var x = "start"
        this.props.onFooterClicked(x);
    }

    mapsButtonPressed = () => {
        var x = "maps"
        this.props.onFooterClicked(x);
    }
    infoButtonPressed = () => {
       var x = "info"
        this.props.onFooterClicked(x);
    }

    render() {
        return(
            <div className = "ButtonsToFooter">
                <button onClick={this.homeButtonPressed} className="footerButton" > 
                    <img alt="home" className="buttonImages" src={button1image}/>
                </button>
                <button onClick={this.mapsButtonPressed} className="footerButton"> 
                    <img alt="map" className="buttonImages" src={button2image}/>
                </button>
                <button onClick={this.infoButtonPressed} className="footerButton">
                    <img alt="info" className="buttonImages" src={button3image}/>
                </button>
            </div>
        ); 
    }
}

export default footerMenu; 