import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import React, { Component } from 'react';
import './mapAppScreen.css'
import '../components/buttons.css'
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
    this.map = React.createRef();
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
    return {
      dist: d,
      marker: mk2
    };
  }

  distClicked(yourMarker,stationMarkers) {
    var distances = [];
    for(var i in stationMarkers) {
      distances[i] = this.haversineDistance(yourMarker,stationMarkers[i]);
    }
    var min = Math.min.apply(null, distances.map(item => item.dist));
    var minIndexArr = distances.map(item => item.dist == min);  
    var minIndex;
    for(var j = 0; j < minIndexArr.length; j++) {
      if(minIndexArr[j] == true) {
        minIndex = j;
        break;
      }
    }
    var lat =  distances[minIndex].marker.props.position.lat;
    var lng =  distances[minIndex].marker.props.position.lng;
    //TODO zoom in on marker
    alert("Närmaste återvinningsstation är " + min.toFixed(2) + " km bort " + distances[minIndex].marker.props.name);

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
    var personalMarker;
    var markers;

    if(loading){return null;}
    else{
      markers = this.displayMarker();
      personalMarker = <Marker 
            name="Din plats"
            onClick={this.onMarkerClick}
            icon = {iconCurrent}
            position={
              {lat:this.state.lati, lng:this.state.long}
            }
          >
          </Marker>
    return (
      <div className="Map-Content">
      {/*TODO: make button work with map*/}
        <Map ref={this.map} className="Map-MapComponent"

          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat:this.state.lati, lng: this.state.long}}
          center={{lat:this.state.lati, lng:this.state.long}}>
          {markers}
          {personalMarker}
          <button id="loc" class ="buttonClass" onClick={() => { this.distClicked(personalMarker,markers)}}>Hitta Närmaste Återvinningsstation</button> 
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
