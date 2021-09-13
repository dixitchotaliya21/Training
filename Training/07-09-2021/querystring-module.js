var obj = {
    name:"Dixit",
    salary:50000
}
var querystring = require('querystring')
var datastring = querystring.stringify(obj)
console.log(datastring)
var dataobj = querystring.parse(datastring)
console.log(dataobj.name)