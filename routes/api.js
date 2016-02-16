var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');

/* GET home page. */

router.get('/', function(req, res, next) {
	var result = '';
	var searchURL = 'https://www.bing.com/images/search?q=djkhaled';
	if(req.query.search!='' && req.query.search!=null){
		searchURL += req.query.search;
	}
	console.log(searchURL);
	request(searchURL, function(error, response, body){
		// console.log(body);
		$ = cheerio.load(body);
		// $$ = cheerio.load($('#main .content .row').html());
		// console.log($$('.item div').get(1));
		result = $('#main .content .row .item div img').attr('src');
		// console.log($('#main .content .row .item div img').attr('src'));
		console.log('Posting to slack');
		request.post('https://hooks.slack.com/services/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', {"text": "Bless up", "channel": "#projectblessup", "username": "DJ Khaled"}, function(err, res, bod){
			console.log(bod);
			if (!err)
				console.log('posted to webhook');
			else 
				console.log ('Error: ' + err); 
		});


		res.send(result);
	});
});
module.exports = router;