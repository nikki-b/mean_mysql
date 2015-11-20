var express = require("express");
var app = express();

// body-parser
var bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//client
app.use(express.static(__dirname + "/client"));

//routes
require(__dirname+"/server/config/routes.js")(app);

var port = 8000;
app.listen(port, function(){
	console.log("*******LISTENING ON "+port+"*******");
});