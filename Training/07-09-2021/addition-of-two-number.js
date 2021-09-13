var http = require('http')
var server = http.createServer(function(request,response){
    var a = 1
    var b = 1
    var c = a+b;
    response.write("<h1>Welcome to node js.</h1>")
    if(c>10){
        
        response.write("<b>Sum of two number is greter than 10 and sum is in below</b>")
        
        response.write("<b> Sum of two numbers is "+ c +"</b>")
    }else{
        response.write("<b>Sum of two number is lessthan than 10 and sum is in below</b>")
        
        response.write("<b> Sum of two numbers is "+ c +"</b>")
    }
    
    response.end("<h1>Hiiii</h1>" + c)
})
server.listen(3000)
console.log("http://127.0.0.1:3000")