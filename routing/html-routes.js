// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
var path = require('path');
var connection = require('../config/connection.js');


module.exports = function(app){

app.get('/', function(req,res) {
    //mySQL commands
    connection.query('SELECT * FROM burgers;', function(err, burger) {
      if (err) throw err;
        //console.log('The solution is: ', {burger});
        res.render('index', {burger});
        });
    });


// //delete route -> back to home
// app.delete('/delete', function(req,res){
//     //mySQL commands
//     connection.query('DELETE FROM bugers WHERE ID = ?', [req.body.id] function(err, result) {
//     if (err) throw err;
//     });
//     res.redirect('/');
// });

//put route -> back to home
// app.put('/update', function(req,res){
//     console.log("PUT received: ->");
//     console.log(req.body);
//     //mySQL commands
//     connection.query('UPDATE day_planner SET plan = ? WHERE ID = ?', [req.body.user_plan, 1], function(err, result) {
//     if (err) throw err;
//     });
//     res.redirect('/');
// });


}