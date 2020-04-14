const http = require('http');
const os = require('os');
console.log("Magnus server starting....");
var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("This is v4 of app. The server you've reached now: " + os.hostname() + "\n");
};
var www = http.createServer(handler);
www.listen(80);