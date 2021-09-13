
var data = require('./basic-caculator-with-method-chaaining')
var http = require('http')
var server = http.createServer(function(request,response){
    response.writeHead(200,{'contex':'text/html'})
    var result = data.calculate(10).multiply(20)
    response.end(result)
})
server.listen(3000)
console.log("http://127.0.0.1:3000")