var http = require('http')
var server = http.createServer(function(request,response){
    response.writeHead(200,{'contex':'text/html'})
    response.render(__dirname + '\demo2.html')
})
server.listen(3000)
console.log("http://127.0.0.1:3000")