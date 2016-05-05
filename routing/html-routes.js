// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
var path = require('path');
var connection = require('../config/connection.js');
var orm = require('../config/orm.js');
//notify the server administrator that the html route is connected
console.log("html-routes connected");


module.exports = function(app){

	app.get('/', function(req,res) {
	    //mySQL commands
	    // connection.query('SELECT * FROM burgers;', function(err, burger) {
	    //   if (err) throw err;
	    //     res.render('indexSAVE', {burger});
	    //     });
	    // });
	    orm.getAllBurgers(function(burger){
				// if (err) throw err;
	        	res.render('indexSAVE', {burger});
	    	})
    });
}