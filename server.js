// server.js
// where your node app starts

// init project
var compression = require('compression');
var cors = require('cors');
var express = require('express');
var app = express();

// Enable Compression
app.use(compression());

// Enable CORS
app.use(cors({ origin: '*' }));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
