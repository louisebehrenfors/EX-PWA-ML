import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React, { Component } from 'react';
import './mapAppScreen.css'
import iconCurrent from './CurrentLocation.png'

class MapContainer extends Component{
  constructor (){
    super();
    this.state = {
      long: "13.503266",
      lati:"59.381368",
      loading: true,
      selectedPlace: {},
      activeMarker:{} ,
      showingInfoWindow: false,
      recyclePlaces: [
        {lati:"59.389945", long:"13.484566", infoText:"Återvinningsstation Våxnäs"},
        {lati:"59.400677", long:"13.538684", infoText:"FTI Station Kropppkärr"},
        {lati:"59.386407", long:"13.569744", infoText:"Åvc Heden"},
      ]
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.showPosition =this.showPosition.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

   componentDidMount = () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("No support for geolocation");    
    }
   }     
  showPosition(position) {
    this.setState({
      long:position.coords.longitude,
      lati:position.coords.latitude,
      loading: false
    });
  }

  displayMarker = () => {
    return this.state.recyclePlaces.map((recycle,index) => {
      return <Marker key={index} id={index}
      onClick={this.onMarkerClick}
      name={recycle.infoText}
      position={{
        lat: recycle.lati,
        lng: recycle.long
      }}></Marker>
    })
  }

  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
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

    const {loading} = this.state.loading;

    if(loading){return null;}
    else{
    return (
      <div className="Map-Content">
        <Map className="Map-MapComponent"
          
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat:this.state.lati, lng: this.state.long}}
          center={{lat:this.state.lati, lng:this.state.long}}>
          <Marker 
            name="Din plats"
            onClick={this.onMarkerClick}
            icon = {iconCurrent}
            position={
              {lat:this.state.lati, lng:this.state.long}
            }
          >
          </Marker>
          {this.displayMarker()}
          <InfoWindow 
                marker={this.state.activeMarker} 
                visible={this.state.showingInfoWindow} 
          >    <div><h3>{this.state.selectedPlace.name}</h3></div>
          </InfoWindow>
        </Map>
      </div>
    );}
  }
}
  export default GoogleApiWrapper({
    apiKey: ''
  })(MapContainer);
