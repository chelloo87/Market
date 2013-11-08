/**
 * Necessity
 */
var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;


var necessitySchema = new Schema({
	necessityTypeId: Schema.ObjectId,
	itemId: Schema.ObjectId,
	scoreId : Schema.ObjectId,
	quantity: Number	
});
mongoose.model('Necessity', necessitySchema);

var Necessity = mongoose.model('Necessity');



/**
 * Exports
 */

exports.Necessity = Necessity;

