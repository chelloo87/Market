/**
 * New node file
 */

function UserController(user){
	this.user = user;
	
}

UserController.prototype.getUser = function (request, response){
	
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
	
	
	utils.writeObjectJson(response,body);
	
}

UserController.prototype.loginUser = function (request, response){
	
	utils.writeObjectJson(response,body);
}

UserController.prototype.registerUser = function (request, response){
	
	utils.writeObjectJson(response,body);
}

