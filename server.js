const express = require('express');
const app = express();
const fs = require('fs');
const {PredictionAPIClient}  = require("@azure/cognitiveservices-customvision-prediction");

app.use('/static',express.static(__dirname + '/client/build/static'));
app.use('/',express.static(__dirname + '/client/build'))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname+ '/client/build/index.html');
});

app.listen(process.env.PORT || 5000);
