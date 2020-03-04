import React, { Component } from 'react';
import logo1 from './logo1.svg'; 
import './App.css';
import StartAppScreen from './screens/startAppScreen';
import ChosenAppScreen from './screens/chosenAppScreen';
import AddToHomescreen from 'react-add-to-homescreen';

let deferredPrompt; 

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault(); 
  deferredPrompt = e; 
  showInstallPromotion(); 
});

function showInstallPromotion () {

}
function hideMyInstallPromotion(){

}

// buttonInstall.addEventListener('click', (e) => {
//   // Hide the app provided install promotion
//   hideMyInstallPromotion();
//   // Show the install prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice.then((choiceResult) => {
//     if (choiceResult.outcome === 'accepted') {
//       console.log('User accepted the install prompt');
//     } else {
//       console.log('User dismissed the install prompt');
//     }
//   })
// });

class App extends Component {
  constructor () {
    super();
    this.state = {
      pictureOk: false,
    };
    this.changeScreen = this.changeScreen.bind(this); 
  }

  changeScreen = childData => {
    this.setState({
      pictureOk: true,
      filechosen: childData
    });
  }

  cancelPressed = () => {
    this.setState({
      pictureOk: false,
      filechosen: ''
    }); 
  }

  handleAddToHomescreenClick = () => {
    alert(`
      1. Open Share menu
      2. Tap on "Add to Home Screen" button`);
  };

  render() {
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo1} className="App-logo" alt="logo" />
          <h1 className="App-title">Recycle Me!</h1>
        </header>
        <style>{'body { background-color: #499272; }'}</style>
        <div className = "App-content">  
          {this.state.pictureOk ?   <ChosenAppScreen cancelPress={this.cancelPressed} imageFromParent = {this.state.filechosen}  /> : 
          <StartAppScreen onChangeScreen = {this.changeScreen} />   }
        </div>
        {/* <div className = "App-Add-2-HomeScreen">
          <div className="modal-content">
            <button className = "App-ButtonCancel">
              <h3>Nej</h3>
            </button>
            <button className = "buttonInstall">
              <h3>Ladda ner!</h3>
            </button>
          </div>
        </div> */}

          <AddToHomescreen onAddToHomescreenClick={this.handleAddToHomescreenClick} />

        <div className="App-footer">
          <p> Recycle Me PWA</p>
        </div>
      </div>
    );
  }
}

export default App;
