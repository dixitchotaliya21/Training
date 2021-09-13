var fs = require('fs');
// Synchronous Read
var data = fs.readFileSync('file-demo.js');
console.log("Synchronous read: " + data.toString());
console.log("Program Ended");