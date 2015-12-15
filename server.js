
var express = require('express');
var app = express();

// Set the view engine && public folder
app.set('view enigne', 'ejs');
app.set('views', __dirname + '/pixelArt/views');
app.use(express.static(__dirname + '/assets'));

var pixelRoutes = require('./pixelArt/controllers/routes');
app.use('/pixelArt', pixelRoutes);

var server = app.listen(8000, function () {
  var port = server.address().port;
  console.log('Listening on ', port);
});
