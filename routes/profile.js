var express = require('express');
var router = express.Router();

// Post
router.get('/get-data', function(req, res, next){
	postData.find()
		.then(function(doc) {
			res.render('/', {items: doc});
		});
});

router.post('/insert', function(req, res, next){
		var item = {
			title: req.body.tile,
			message: req.body.message
		};

		var data = new postData(item);
		data.save();

		res.redirect('/');
});

// Get Homepage
router.get('/dashboard', ensureAuthenticated, function(req, res){
	res.render('profile');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/');
	}
}

// 	var title = req.body.name;
// 	var message = req.body.email;
//
// 	// Validation
// 	req.checkBody('title', 'Title is required').notEmpty();
// 	req.checkBody('message', 'Message is required').notEmpty();
//
// 	var errors = req.validationErrors();
//
// 	if(errors){
// 		res.render('profile',{
// 			errors:errors
// 		});
// 	} else {
// 		var newPost = new Forum({
// 			title: title,
// 			message: message,
// 		});
//
// 		Forum.save(newPost, function(err){
// 			if(err){
// 				console.log(err);
// 			} else {
// 				console.log('It Worked.');
// 			}
//
//
// 		});
//
// 		req.flash('success_msg', 'Your topic is on the front page!');
//
// 		res.redirect('/');
// 	}
// });


module.exports = router;
