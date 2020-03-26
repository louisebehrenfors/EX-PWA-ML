import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import React, { Component } from 'react';
import './mapAppScreen.css'
import iconCurrent from './currentLocation.png'

class MapContainer extends Component{
  constructor (){
    super();
    this.state = {
      long: "13.503266",
      lati:"59.381368",

    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.showPosition =this.showPosition.bind(this);
  }

   componentDidMount = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("No support for geolocation");    
    }
   }     
  showPosition(position) {
    console.log("Latitude = " + position.coords.latitude);
    console.log("Longitude = " + position.coords.longitude);

    this.setState({
      long:position.coords.longitude,
      lati:position.coords.latitude
    });

  }

  render() {
    const mapStyles = {
      width: '97vw',
      height: '50%',
      flex: 1,
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      };

    return (
      <div className="Map-Content">
        <Map className="Map-MapComponent"
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat:this.state.lati, lng: this.state.long}}
          center={{lat:this.state.lati, lng:this.state.long}}>
          <Marker 
            icon = {iconCurrent}
            position={
              {lat:this.state.lati, lng:this.state.long}
            }
          />
        </Map>
      </div>
    );
  }
}
  export default GoogleApiWrapper({
    apiKey: '#API KEY HERE'
  })(MapContainer);
