var http = require('http')
var server = http.createServer(function(request,response){
    response.writeHead(200,{'contex':'text/html'})
    response.end("<b>Welcome to node js.</b>")
})
server.listen(3000)
console.log("http://127.0.0.1:3000")