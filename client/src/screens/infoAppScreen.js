import React, { Component } from "react";
import "./infoAppScreen.css";
class infoAppScreen extends Component {
  render() {
    return (
      <div className="Info-Container">
        <h1>Information</h1>
        <h2>Detta är ett examensarbete vårterminen 2020</h2>
        <h3>Appen använder sig av bildigenkännng, så ta en bild på det du vill återvinna så kommer appen ge en beskrivning :)</h3>

        <h4>Genom fortsatt använding av denna applikationen tillåter du att din bild temporärt lagras på Azure.</h4>
        <h4>När klassificeringen är klar, kommer din bild tas bort.</h4>
        <h4>Inga bilder kommer användas för utvecklingssyfte eller liknande.</h4>
      </div>
    );
  }
}

export default infoAppScreen;
