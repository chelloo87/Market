/**
 * Necessity Tree
 */
var config = require('./config.js');

var mongoose =config.mongoose;
var Schema = mongoose.Schema;


var necessityTreeSchema = new Schema({	
	necessityParentId: Schema.ObjectId,
	necessityId: Schema.ObjectId		
});
mongoose.model('NecessityTree', necessityTree);

var NecessityTree = mongoose.model('NecessityTree');



/**
 * Exports
 */

exports.NecessityTree = NecessityTree;

