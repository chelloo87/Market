/**
 * Item Market
 */

var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;


var itemMarketSchema = new Schema({
	itemId : Schema.ObjectId,
	name : String,
	qualityLevel: Number,
	userId: Schema.ObjectId,
	price: Number,
	quantity: Number,
	isForSale: Boolean	
	
});
mongoose.model('ItemMarket', itemMarketSchema);

var ItemMarket = mongoose.model('ItemMarket');



/**
 * Exports
 */
exports.ItemMarket = ItemMarket;

