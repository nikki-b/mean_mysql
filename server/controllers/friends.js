// EXAMPLE OF A SERVER-SIDE CONTROLLER:

var mysql = require("mysql");
var connection = mysql.createConnection({
	host			: "localhost",
	user			: "root",
	password	: "root",
	database	: "myownapi"
})

// --- connection implied when running a query below
// connection.connect(function(err){
// 	if(err){
// 		console.log("error connecting: " + err.stack);
// 		return;
// 	}
// 	console.log("connected as id " + connection.threadId);
// })

module.exports = (function(){
	return {
		show: function(req,res){
			var query = "SELECT * FROM quotes";
			connection.query(query, function(err, results){
				if(err){
					console.log(err);
				} else{
					res.json(results);
				}
			});
		}
	}
})();