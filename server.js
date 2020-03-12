const express = require('express');
const app = express();

app.use('/static',express.static(__dirname + '/client/build/static'));
app.use('/',express.static(__dirname + '/client/build'))

app.get('/', (req, res, next) => {
    res.sendFile(__dirname+ '/client/build/index.html');
});

app.listen(process.env.PORT || 5000);
