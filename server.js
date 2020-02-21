const express = require('express');
// const cors = require('cors');
const app = express();

const path = require('path');
const router = express.Router(); 


// app.use(cors());

  app.use('/static',express.static(__dirname + '/client/build/static'));
//   app.use('/public',express.static(__dirname + '/client/public'));
  app.use(express.static('client'));


 app.get('/', (req, res, next) => {

    console.log(path.join(__dirname,'/client/build/index.html'));
    console.log(express.static(__dirname));
    console.log(__dirname);
        

    // res.sendFile(path.join('/client/build/index.html'));
    res.sendFile(__dirname+ '/client/build/index.html');
    

 });

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);

