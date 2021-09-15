const express = require('express')
var fs = require('fs')
var ejs = require('ejs')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})


app.use(express.static('public'));

app.get('/contact', (req, res) => {
    fs.readFile('demo.html', function (err, d) {
        if(err) throw err
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(d);
        res.end();
    });
  })

  app.get('/demo', (req, res) => {
    res.sendFile('/public/demo.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


 
