import React, { Component } from 'react';
import logo1 from './logo1.svg'; 
import './App.css';
import StartAppScreen from './screens/startAppScreen';
import ChosenAppScreen from './screens/chosenAppScreen';
import Maps from './components/maps';
import FooterMenu from './components/footerMenu'
import ResultAppScreen from './screens/resultAppScreen'
import InfoAppScreen from './screens/infoAppScreen'
import footerMenu from './components/footerMenu';

class App extends Component {
  constructor () {
    super();
    this.state = {
      pictureOk: false,
      screen: "start"
    };
    this.changeScreen = this.changeScreen.bind(this); 
    this.goToResult = this.goToResult.bind(this); 
    this.handleFooterClicked = this.handleFooterClicked.bind(this);

  }
  changeScreen = childData => {
    this.setState({
      screen:"chosen",
      pictureOk: true,
      filechosen: childData
    });
  }

  goToResult = () => {
    this.setState({
      screen:"result"
    });
  }
  openMapScreen = () =>  {
    this.setState({
      screen: "maps"
    });
  }

  cancelPressed = () => {
    this.setState({
      screen:"start",
      pictureOk: false,
      filechosen: ''
    }); 
  }

  handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };


  handleFooterClicked = fromChild => {
    this.setState({
      screen: fromChild
    });
  }

  render() {
    let content; 
    if(this.state.screen === "chosen"){ content = <ChosenAppScreen chosenPress={this.goToResult} cancelPress={this.cancelPressed} imageFromParent = {this.state.filechosen} />} 
    else if(this.state.screen === "result") { content = <ResultAppScreen cancelPress={this.cancelPressed} imageFromParent = {this.state.filechosen}/>} 
    else if(this.state.screen === "maps") { content = <Maps mapShown = {this.openMapScreen} />; } 
    else if (this.state.screen === "info") {content = <InfoAppScreen/>} 
    else content = <StartAppScreen onChangeScreen = {this.changeScreen} /> 
    
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-Image-Container">
            <img src={logo1} className="App-logo" alt="logo" />
            <h1 className="App-title">Recycle Me!</h1>
          </div>
        </header>
        <style>{'body { background-color: #499272; }'}</style>
        <div className = "App-content"> 
        {content}
        </div>
        <div className="App-footer">
        <FooterMenu onFooterClicked = {this.handleFooterClicked}/>
        </div>
      </div>
    );
  }
}

export default App;
