var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var request = require('request');

/* GET home page. */

router.get('/', function(req, res, next) {
	console.log ('IT WORKS');
	var result = '';
	var searchURL = 'https://www.bing.com/images/search?q=djkhaled';
	if(req.query.search!='' && req.query.search!=null){
		searchURL += req.query.search;
	}
	console.log("Search URL: " + searchURL);
	request(searchURL, function(error, response, body){
		// console.log(body);
		$ = cheerio.load(body);
		// $$ = cheerio.load($('#main .content .row').html());
		// console.log($$('.item div').get(1));
		result = $('#main .content .row .item div img').attr('src');
		// console.log($('#main .content .row .item div img').attr('src'));
		console.log('Posting to slack');
		request.post('https://hooks.slack.com/services/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', {json:{text: "Bless up"}}, function(err, res, bod){
			console.log(err + '\t' res + '\t' +  bod);
		});


		res.send(result);
	});
});
module.exports = router;