// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
var path = require('path');
var orm = require('../config/orm.js');

//notify the server administrator that the html route is connected
console.log("html-routes connected");

module.exports = function(app){
//use orm to get all burgers from mysql
	app.get('/', function(req,res) {
	    orm.getAllBurgers(function(burger){
	        	res.render('indexJD', {burger});
	    	})
    });
}