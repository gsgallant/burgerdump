// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

var path = require('path');
var connection = require('../config/connection.js');

module.exports = function(app){

app.post('/add', function(req,res) {
    // //mySQL commands
    // connection.query('SELECT * FROM burgers;', function(err, burger) {
    //   if (err) throw err;
    //     //console.log('The solution is: ', {burger});
    //     res.render('index', {burger});
    //     });
    });

app.post('/delete', function(req,res) {
   console.log("Delete at /delete: %s",req);

    // //mySQL commands
    // connection.query('SELECT * FROM burgers;', function(err, burger) {
    //   if (err) throw err;
    //     //console.log('The solution is: ', {burger});
    //     res.render('index', {burger});
    //     });
    });
app.post('/update', function(req,res) {
   console.log("update at /update: %s",req);

    // //mySQL commands
    // connection.query('SELECT * FROM burgers;', function(err, burger) {
    //   if (err) throw err;
    //     //console.log('The solution is: ', {burger});
    //     res.render('index', {burger});
    //     });
    });


}



