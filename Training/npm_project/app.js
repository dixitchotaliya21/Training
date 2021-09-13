var http = require('http');
http.createServer(function(request,response){
    
    
    response.end("Welcome to node js4.");
}).listen(3000);
console.log("http://127.0.0.1:3000");