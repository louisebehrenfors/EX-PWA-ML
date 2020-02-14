import React, { Component } from 'react';

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
}

class Uploader extends Component{

    componentDidMount(){
        this.fileSelector = buildFileSelector(); 
    }
    /*constructor(props){
        super(props); 
        this.state = { uploaderChosen: false }
        this.cancelUploader = this.cancelUploader.bind(this); 
    }*/
    handleFileSelect = (e) => {
        e.preventDefault(); 
        this.fileSelector.click(); 
    }

    render(){
        return <button className="uploaderButton" onClick={this.handleFileSelect}><h2> Ladda upp en bild</h2> </button>
       // return <a className="button" href="" onClick={TouchList.handleFileSelect}> Select Files </a>
    }
    
}

export default Uploader; 