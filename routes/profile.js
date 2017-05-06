var express = require('express');
var router = express.Router();


// Get Homepage
router.get('/dashboard', ensureAuthenticated, function(req, res){
	res.render('profile');
});

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.render('login');
	}
}

module.exports = router;

// // Post
// router.get('/get-data', function(req, res, next){
// 	postData.find()
// 		.then(function(doc) {
// 			res.render('/', {items: doc});
// 		});
// });
//
// router.post('/insert', function(req, res, next){
// 		var item = {
// 			title: req.body.tile,
// 			message: req.body.message
// 		};
//
// 		var data = new postData(item);
// 		data.save();
//
// 		res.redirect('/');
// });
//
