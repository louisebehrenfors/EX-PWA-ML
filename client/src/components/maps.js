import React, { Component } from "react";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.maptest = this.maptest.bind(this);
    this.showPosition = this.showPosition.bind(this);
  }

  maptest = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("No support for geolocation");
    }
  };
  showPosition(position) {
    console.log("Latitude = " + position.coords.latitude);
    console.log("Longitude = " + position.coords.longitude);
  }

  render() {
    return (
      <div className="mapContainer">
        <h1>Here be maps</h1>
        <button
          onClick={() => {
            this.maptest();
          }}
        >
          Press Me
        </button>
      </div>
    );
  }
}

export default Maps;
