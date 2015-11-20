// EXAMPLE CONTROLLER:
var friends = require("./../controllers/friends.js");
var bodyParser = require("body-parser");

module.exports = function(app){
	// GET EXAMPLE:
	app.get("/index", function(req,res){
		friends.show(req,res);
	});
	// POST EXAMPLE:
	// app.post("/friends", bodyParser.json(), function(req,res){
	// 	friends.add(req,res);
	// })
}