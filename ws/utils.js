/*
 * Util methos for web service calls
 */


exports.writeObjectJson = function writeObjectJson(response, object){
	headers = {};
	headers['Connection'] = 'close';
	headers['Content-Type'] = 'application/json';
	response.writeHead(headers);
	response.end(JSON.stringify(object));
};