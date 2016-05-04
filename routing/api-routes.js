// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

var path = require('path');
var connection = require('../config/connection.js');

console.log("api-routes connected");


module.exports = function(app){


    app.post('/add', function(req,res) {
        console.log("Add a buger: %s",req.body.burger_name);
        
        var addBurger = {burger_name : req.body.burger_name};
        connection.query('INSERT INTO burgers SET ?' , addBurger, function(err, result) {
        if (err) throw err;
        });
        res.redirect('/');
    });

    //delete route -> back to home
    app.put('/devour', function(req,res){
        console.log("devoured burger id:",req.body.burgerid);
        connection.query('UPDATE burgers SET devoured = ? WHERE ID = ?', [1, req.body.burgerid], function(err, result) {
            if (err) throw err;
        });
        res.redirect('/');
    });

}



