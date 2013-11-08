/**
 * Combinator - Combination
 */

var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;


var combinatorCombinationSchema = new Schema({
	combinationId : Schema.ObjectId,
	combinatorId : Schema.ObjectId	
	
});
mongoose.model('CombinatorCombination', combinatorCombinationSchema );

var CombinatorCombination = mongoose.model('CombinatorCombination');



/**
 * Exports
 */
exports.CombinatorCombination = CombinatorCombination;

