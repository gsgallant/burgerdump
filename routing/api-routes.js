// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================
var path = require('path');
var orm = require('../config/orm.js');

//notify the server administrator that the api-route is connected
console.log("api-routes connected");

module.exports = function(app){

//uses the ORM addBurger
    app.post('/add', function(req,res) {
        if(req.body.burger_name){
            orm.addBurger(req.body.burger_name, function(){
                res.redirect('/');
        
            })
        }
    });

    //used orm devourBurger
    app.put('/devour', function(req,res){
        orm.devourBurger(req.body.burgerid, function(){
            res.redirect('/');
        })
    });

    app.put('/another', function(req,res){
        orm.anotherBurger(req.body.burgerid, function(){
            res.redirect('/');
        })
    });
}



