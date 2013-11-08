/**
 * Session
 */

var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;


var sessionSchema = new Schema({
	sessionName: String,
	users: [Users],
	ressources: [Ressources],
	rules: [Rules]
	
});
mongoose.model('Session', sessionSchema );

var Session = mongoose.model('Session');



/**
 * Exports
 */
exports.Session = Session;

