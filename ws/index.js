

var utils = require('./utils.js');
var userDB = require ('../model/user.js');
var itemDB = require ('../model/item.js');
var userSesvice = require ('../controller/UserController.js');

var User = userDB.User;
var Item = itemDB.Item;
var Category = itemDB.Category;

function marketsimhello (request, response){

	params={};

	testObj={};
	testObj.projectName = "Market Sim";
	testObj.version = "1.0";
	
	var user = new User();
	user.username = "Market sim admin";
	user.save();			
					
	var category = new Category();
	category.name="Alimente";
	
	var item = new Item();
	item.name="Paine";
	item.categoryId=category.id;
	
	
	category.save(function (err){
		
		item.save();
	});
	utils.writeObjectJson(response,user);
};

function posttest (request, response){
var datas ='';
request.on("data", function(data) {
    datas += data;
	console.log('Data');
});
request.on("end", function(data) {
debugger;
var body = JSON.parse(datas);

console.log(body);

for(var pro in body)
{
	console.log(pro+ ':'+ body[pro] +'\r\n');
}

utils.writeObjectJson(response,body);
    
});
}

function posttest1 (request, response){
var datas ='';
console.log(request.url);
console.log(request.param('id'));
request.on("data", function(data) {
    datas += data;
	console.log('Data');
});
request.on("end", function(data) {
debugger;
var body = JSON.parse(datas);

console.log(body);

for(var pro in body)
{
	console.log(pro+ ':'+ body[pro] +'\r\n');
}

utils.writeObjectJson(response,body);
    
});
}

exports.ws_routes = function (app){

	app.get('/ws/marketsim', marketsimhello);
	app.get('/ws/users/login', userSesvice.loginUser);
	app.post('/ws/users/register', userSesvice.registerUser);
	app.post('/ws/posttest', posttest);
	app.post('/ws/posttest/:id', posttest1);

};