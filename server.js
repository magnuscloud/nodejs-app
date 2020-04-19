const http = require('http');
const os = require('os');
console.log("Magnus server starting....");
var handler = function(request, response) {
    console.log("Received request from " + request.connection.remoteAddress);
    response.writeHead(200);
    response.end("Congratualations! Your sample NodeJS app is working!!! This is v1 of app. The server you've reached now: " + os.hostname() + "\n");
    response.end("This is v1 of app. The server you've reached now: " + os.hostname() + "\n");
};
var www = http.createServer(handler);
www.listen(80);