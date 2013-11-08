


var config = require('./config.js');
var flatMatcher = config.flatMatcher 

var mongoose =config.mongoose;

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username : String,
	password : String,
	emailAddress : String,
	points: Number,
	money: Number,
	registerTimestamp : Date,
	lastLogin : Date,
	ipAddress : String
});
mongoose.model('User', userSchema);

var User = mongoose.model('User');

var opts = {};
BlogPost.plugin(flatMatcher, opts);
/**
 * Exports
 */
exports.User = User;
