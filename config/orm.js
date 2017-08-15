//import mysql connection
var connection = require('./connection.js')


var orm = {
//create selectAll(), insertOne(), updateOne()
	findAll: function(){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result){
			if (err) {
		        throw err;
		    }
		    console.log(result);
		})
	}

};

module.exports = orm;