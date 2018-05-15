// server.js
// where your node app starts

// init project
var express = require('express');
var path = require('path');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.


app.set("views", path.join(__dirname,"views"));
app.set("view engine","pug");

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:query", function (request, response) {
  console.log(request.query);
  response.render("index");

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
