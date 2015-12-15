
var express = require('express');
var app = express();

// Set the view engine && public folder
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.static(__dirname + '/assets'));

// Register root route
app.get('/pixelArt', function(req, res) {
  res.sendFile(__dirname + '/pixelArt/views/index.html');
});

var server = app.listen(8000, function () {
  var port = server.address().port;
  console.log('Listening on ', port);
});
