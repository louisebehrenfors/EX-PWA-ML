import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React, { Component } from 'react';
import './mapAppScreen.css'
import iconCurrent from './currentLocation.png'

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
    this.distClicked = this.distClicked.bind(this);
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
  haversineDistance(mk1, mk2) {
    var R = 6731;  
    var rlat1 = mk1.props.position.lat * (Math.PI/180); 
    var rlat2 = mk2.props.position.lat * (Math.PI/180); 
    var difflat = rlat2-rlat1; 
    var difflon = (mk2.props.position.lng -mk1.props.position.lng) * (Math.PI/180); 

    var d = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat/2)*Math.sin(difflat/2)+Math.cos(rlat1)*Math.cos(rlat2)*Math.sin(difflon/2)*Math.sin(difflon/2)));
    return d;
  }

  distClicked() {
    var distances = [];
    var length = this.state.recyclePlaces.length;
    var stations = this.state.recyclePlaces;
    var markers = [];
    //TODO: make it possible to test from your own position
    markers = this.displayMarker();
    console.log("Distance = " + this.haversineDistance(markers[0],markers[1]));
  }

  onMarkerClick (props, marker, e) {
    console.log(marker);
    console.log(props);
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
      {/*TODO: make button work with map*/}
        <button id="loc" onClick={() => { this.distClicked()}}>Press Me!</button> 
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
