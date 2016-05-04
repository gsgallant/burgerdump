// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var methodOverride = require('method-override')
var exphbs = require('express-handlebars');//handlebars
//var connection = require('./config/connection.js');//mysql connection
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server 
// ==============================================================================
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener
var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + '/public'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
// ==============================================================================
//setup handlesbars templating engine
// ==============================================================================
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./routing/api-routes.js')(app); 
require('./routing/html-routes.js')(app);

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
// app.get('/', function(req,res) {
//     //mySQL commands
//     connection.query('SELECT * FROM burgers;', function(err, burger) {
//       if (err) throw err;
//         //console.log('The solution is: ', {burger});
//         res.render('index', {burger});
//         });
//     });


// // //delete route -> back to home
// // app.delete('/delete', function(req,res){
// //     //mySQL commands
// //     connection.query('DELETE FROM bugers WHERE ID = ?', [req.body.id] function(err, result) {
// //     if (err) throw err;
// //     });
// //     res.redirect('/');
// // });

// //put route -> back to home
// app.put('/update', function(req,res){
//     console.log("PUT received: ->");
//     console.log(req.body);
//     //mySQL commands
//     connection.query('UPDATE day_planner SET plan = ? WHERE ID = ?', [req.body.user_plan, 1], function(err, result) {
//     if (err) throw err;
//     });
//     res.redirect('/');
// });
// // ==============================================================================
// // LISTENER
// // The below code effectively "starts" our server 
// // ==============================================================================

app.listen(PORT, function() {
    console.log("Burger Server listening on PORT: " + PORT);
});