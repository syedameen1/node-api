var express = require('express');
var app  = express();

app.listen(3000, function() {
  console.log("[OK] = HTTP Server listening on: http://localhost:3000");
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

