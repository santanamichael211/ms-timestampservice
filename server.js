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

app.get("/", function (request, response) {
  console.log(request.query);
  response.render("index");

});

app.get("/:query", function (request, response) {
  var date = new Date(request.params.query);
  
  var timeObject = {
    unix:null,
    natural:null
  }

  if(date.toString() != "Invalid Date"){
    var monthA = [];
      monthA[0] = "January";
      monthA[1] = "February";
      monthA[2] = "March";
      monthA[3] = "April";
      monthA[4] = "May";
      monthA[5] = "June";
      monthA[6] = "July";
      monthA[7] = "August";
      monthA[8] = "September";
      monthA[9] = "October";
      monthA[10] = "November";
      monthA[11] = "December";
    
    var month = monthA[date.getMonth()];
   
    timeObject.unix = date.getTime();
    timeObject.natural = month + " " + date.getDate() + ", " + date.getFullYear();
  }
  
  response.render("timeserv",{
  time:JSON.stringify(t)
  })

});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
