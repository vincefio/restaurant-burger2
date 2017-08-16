var express = require('express');
var app = express()
var router = express.Router();

//import the burger model to use database functions
var burger = require('../models/burger.js');

//original get route
router.get("/", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		}
		// console.log('hbs object ' + hbsObject.burgers[0])
		res.render("index", hbsObject)
	})
})

module.exports = router;