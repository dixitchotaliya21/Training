var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('simpleemail');
});

router.get('/formquery', function(req, res, next) {
    res.send("Name " + req.query.name);
});



module.exports = router;