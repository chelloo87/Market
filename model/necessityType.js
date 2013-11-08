/**
 * Necessity Type
 */
var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;


var necessityTypeSchema = new Schema({	
	name: String
		
});
mongoose.model('NecessityType', necessityTypeSchema);

var NecessityType = mongoose.model('NecessityType');



/**
 * Exports
 */

exports.NecessityType = NecessityType;

