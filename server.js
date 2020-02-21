const express = require('express');

const app = express();

/*var path = require('path')
app.use('/../public')

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});*/
const port = 5000; 

app.listen(port, () => `Server running on port ${port}`);