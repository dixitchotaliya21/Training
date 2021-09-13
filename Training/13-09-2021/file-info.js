var fs = require('fs');
fs.stat('demo.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("isDirectory ? " + stats.isDirectory());
});