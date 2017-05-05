var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/contact', function(req, res, next){
	res.render('contact');
});

router.post('/send', function(req, res, next){
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			type: 'OAuth2',
			user: 'gitpolitical@gmail.com',
			clientId: '136128298954-3lb157j6mmv4tet6i2lm2mm6fs68113m.apps.googleusercontent.com',
			clientSecret: '-v74jyienB8VWbhWR1BE8J6k',
			refreshToken: '1/avMvCy5T2QxrJGnFxoBx1gzIgZZnTE7iwUjumgS1Z8LT3fDFsDhwDLjscpCBdtsN',
			accessToken: 'ya29.GltBBNoFXSVu6cr3enea802_1ATSKgc1GWLSxdUmpaNNLuhqPQTC8udVz127Cis0AxIL2SqMNlQkHP2slJzgdCnbwBh5piSPBBfvy5ojZHxIlhA4NlkfDzmnHhC7',
			expires: 1484314697598
		}
	});

	var mailOptions = {
			from: '"Conact Page" <noreply@gitpolitical.com>',
			to: 'gitpolitical@gmail.com',
			subject: 'Contact Us',
			text: 'You have a new submission with the following details: Name: '+req.body.name+ ' Email: ' +req.body.email+ ' Phone: ' +req.body.phone+ ' Message: ' +req.body.message,
			html: '<p>You have a new message with the following details...</p><ul><li>Name: '+req.body.name+ ' </li><li>Email: ' +req.body.email+ '</li><li>Phone: ' +req.body.phone+ '</li><li>Message: ' +req.body.message+ '</li></ul>'
	};

	transporter.sendMail(mailOptions, function(error, info) {
		if(error){
			console.log(error);
			res.render('contact');
		} else {
			console.log('Message Sent:' +info.response);
			res.render('contact');
		}
	});

});

module.exports = router;
