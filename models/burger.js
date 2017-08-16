var orm = require('../config/orm.js')

var burger = {
	all: function(cb){
		orm.findAll(function(res){
			cb(res)
		})
	}


}

module.exports = burger;