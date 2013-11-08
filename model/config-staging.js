
var mongoose = require('mongoose');
var uri = 'mongodb://192.168.0.130/DEV';

exports.db_connect = function() {
	var options = {
			  db: { native_parser: true },
			  server: { poolSize: 5 },
			  user: 'marketdb',
			  pass: 'market2013db'
			};
			mongoose.connect(uri, options);
	mongoose.connect();
};
exports.mongoose = mongoose;