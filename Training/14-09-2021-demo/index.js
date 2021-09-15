const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.static('view'));
app.use(express.static('public'));

app.get('/index', (req, res) => {
    res.sendFile('/view/index2.html', { root: __dirname });
});

app.get('/', (req, res) => {
    res.sendFile('/public/demo.html', { root: __dirname });
});


app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));