const express = require('express');
const router = express.Router(); 
express.sendFile(path.join(__dirname + '/index.html'));

// router.get('/', (req, res, next) => {


//     res.sendFile(path.join(__dirname + '/index.html'));


// });

// module.exports = router; 