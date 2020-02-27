const express = require('express');
// const cors = require('cors');
const app = express();

const path = require('path');
const router = express.Router(); 


// app.use(cors());

  app.use('/static',express.static(__dirname + '/client/build/static'));
  app.use('/',express.static(__dirname + '/client/build'))
  //app.use(express.static('public'));
//   app.use('/public',express.static(__dirname + '/client/public'));
  //app.use(express.static('client'));


 app.get('/', (req, res, next) => {


    // res.sendFile(path.join('/client/build/index.html'));
    res.sendFile(__dirname+ '/client/build/index.html');
    

 });


app.listen(process.env.PORT || 5000);

