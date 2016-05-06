var connection = require('./connection');
//notify server administrator that the orm is connected
console.log("orm connected");


var orm = {
    getAllBurgers: function(callback) {
        connection.query('SELECT * FROM burgers;', function(err, burger) {
	      if (err) throw err;
	        callback(burger);
	        });
	    
	    },
    
    devourBurger: function(burgerid, callback) {	
        connection.query('UPDATE burgers SET devoured = ? WHERE ID = ?', [1, burgerid], function(err, result) {
            if (err) throw err;
            callback();
        });
    },
    
    addBurger: function(addBurger, callback) {
        connection.query('INSERT INTO burgers SET ?' , {burger_name : addBurger}, function(err, result) {
        if (err) throw err;
        callback();
        });
    }
};
    
module.exports = orm;