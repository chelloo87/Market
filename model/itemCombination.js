/**
 * Item Combination
 */

var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;


var itemCombinationSchema = new Schema({
	combinationId : Schema.ObjectId,
	itemId : Schema.ObjectId	
	
});
mongoose.model('ItemCombination', itemCombinationSchema );

var ItemCombination = mongoose.model('ItemCombination');



/**
 * Exports
 */
exports.ItemCombination = ItemCombination;

