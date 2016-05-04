// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
var path = require('path');
var connection = require('../config/connection.js');
console.log("html-routes connected");


module.exports = function(app){

	app.get('/', function(req,res) {
	    //mySQL commands
	    connection.query('SELECT * FROM burgers;', function(err, burger) {
	      if (err) throw err;
	        res.render('index', {burger});
	        });
	    });

}