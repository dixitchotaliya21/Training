var fs = require('fs');
var http = require('http')
http.createServer(function (req, res) {
    fs.readFile('demo2.html', function (err, d) {
        if(err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(d);
        res.end();
    });
}).listen(3000);
console.log("http://127.0.0.1:3000")