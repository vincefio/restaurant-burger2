//import mysql connection
var connection = require('./connection.js')


var orm = {
//create selectAll(), insertOne(), updateOne()
	findAll: function(cb){
		var queryString = "SELECT * FROM burgers";
		connection.query(queryString, function(err, result){
			if (err) {
		        throw err;
		    }
		    cb(result);
		})
	},
	insertOne: function(cb, name){
		var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
		connection.query(queryString, [name], function(err, result){
			if (err) {
		        throw err;
		    }
		    cb(result);
		})
	}

};

module.exports = orm;