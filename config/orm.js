var connection = require('./connection');
//notify server administrator that the orm is connected
console.log("orm connected");


var orm = {
    getAllBurgers: function(callback) {
        console.log('ORM get all burgers');
        connection.query('SELECT * FROM burgers;', function(err, burger) {
	      if (err) throw err;
	        callback(burger);
	        });
	    
	    },
    
    devourBurger: function(burgerid, callback) {	
        // console.log("ORM devoured burger id: ",req.body.burgerid);
        console.log("ORM devoured burger id: ",burgerid)
        connection.query('UPDATE burgers SET devoured = ? WHERE ID = ?', [1, burgerid], function(err, result) {
            if (err) throw err;
            callback();
        });
    },
    
    addBurger: function(addBurger, callback) {
        var addBurger = {burger_name : addBurger};
        connection.query('INSERT INTO burgers SET ?' , addBurger, function(err, result) {
        if (err) throw err;
        callback();
        });
    }
};
    
module.exports = orm;