//mysql connection to burgers_db

var mysql      = require('mysql');

var connection = mysql.createConnection({
     host     : 'd5x4ae6ze2og6sjo.cbetxkdyhwsb.us-east-1.rds.amazonaws.com', //for now, this will always be localhost
     user     : 'fnfb028dmaxmenqw',  // this will be whatever user you use to connect to mysql
     password : 'yg6obtyxsbsfzzah',  // this is the password for the 'user' above
     database : 'burgers_db'  // this is a database which you have on your install of mysql
});

connection.connect(function (err) {
       if (err) {
           console.error('MYSQL error connecting: ' + err.stack);
       return;
       }
       console.log('MYSQL burger_db connected as id: ' + connection.threadId); 
   });
//export this msql connection for use outside with require('./connection')
module.exports = connection;

//yg6obtyxsbsfzzah