var express = require('express');
// var app = express()
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

//post route to create a burger
router.post("/", function(req, res){
	burger.insert(function(data){
		(req.body.burger_name, function(result){
			console.log(result)
			res.redirect("/")
		})
	})
})
module.exports = router;