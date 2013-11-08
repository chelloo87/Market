/**
 * Item 
 */
var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;

var categorySchema = new Schema({
	name : String
	 
});

mongoose.model('Category', categorySchema);
var Category = mongoose.model('Category');



var itemSchema = new Schema({
	name : String,
	picture: String,
	isCombination: Boolean,
	categoryId : Schema.ObjectId
	
});
mongoose.model('Item', itemSchema);

var Item = mongoose.model('Item');



/**
 * Exports
 */
exports.Category = Category;
exports.Item = Item;

