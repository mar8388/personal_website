var restbus = require('restbus');

restbus.listen('3000', function() {
	console.log('restbus is now listening on port 3000');
});