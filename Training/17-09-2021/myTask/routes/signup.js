var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('signup');
});

router.post('/', function (req, res, next) {

    console.log(req.body)
    var a = req.body.name;
    var b = req.body.password;
    res.render('signup_result', { mya: a, myb: b})
});


module.exports = router;