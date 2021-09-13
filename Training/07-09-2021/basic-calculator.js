var num1 = 10
var num2 = 20
var operator = "+"
var data = require('./calculator-module')
var http = require('http')
var server = http.createServer(function(request,response){
    response.writeHead(200,{'contex':'text/html'})
    var result = data.calculate(num1,num2,operator)
    response.end(result)
})
server.listen(3000)
console.log("http://127.0.0.1:3000")