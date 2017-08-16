var orm = require('../config/orm.js')

var burger = {
	all: function(cb){
		orm.findAll(function(res){
			cb(res)
		})
	},
	insert: function(name, cb){
		orm.insertOne("burgers", 
			["burger_name", "devoured"],
			[name, false],
			cb);
	}

}

module.exports = burger;