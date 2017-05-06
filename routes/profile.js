var express = require('express');
var router = express.Router();

var Topic = require('../models/topic');

// Get Homepage
router.get('/dashboard', ensureAuthenticated, function(req, res){
	res.render('profile');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/');
	}
}

// Topic
router.post('/topic', function(req, res){
	var topic = req.body.name;
	var message = req.body.email;

	// Validation
	req.checkBody('topic', 'Topic is required').notEmpty();
	req.checkBody('message', 'Message is required').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.get('/dashboard',{
			errors:errors
		});
	} else {
		var newTopic = new Topic({
			topic: topic,
			message: message,
		});

		User.createUser(newTopic, function(err, topic){
			if(err) throw err;
			console.log(topic);
		});

		req.flash('success_msg', 'Your topic is on the front page!');

	}
});


module.exports = router;
