/**
 * Combination
 */

var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;


var combinationSchema = new Schema({
	resultId : Schema.ObjectId,
	requiredTime: Date,
	startTime: Date	
});
mongoose.model('Combination', combinationSchema );

var Combination = mongoose.model('Combination');



/**
 * Exports
 */
exports.Combination = Combination;

