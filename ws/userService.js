var utils = require('./utils.js');
var userDB = require ('../model/user.js');

var User = userDB.User;

function createUser(request, response){

	var user = JSON.parse(request.body);	
	 
	user.save();			
	
	utils.writeObjectJson(response,user);
};



exports.ws_routes = function (app){

	app.get('/ws/user/createUser', createUser);

};