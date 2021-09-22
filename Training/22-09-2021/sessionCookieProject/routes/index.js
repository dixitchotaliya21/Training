var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.clearCookie('counter');
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.clearCookie('counter');
  res.render('login');
});

router.get('/colorpicker', function(req, res, next) {
  res.clearCookie('counter');
  res.render('colorpicker');
});

router.post('/formprocess', function(req, res, next) {
  res.clearCookie('counter');
  var color1 = req.body.color;
  res.cookie('color',color1)
  res.redirect('/formprocess1')
});
router.get('/formprocess1', function(req, res, next) {
  res.clearCookie('counter');
  var color2 = req.cookies.color;
  res.render('index',{color : color2});
});


//login process route
router.post('/login-process', function(req, res, next) {
  res.clearCookie('counter');
  var userName = req.body.name;
  res.cookie('user',userName ,{maxAge:100000000})
  req.session.user = userName;
  res.redirect('/home')
});

router.get('/home', function(req, res, next) {
  res.clearCookie('counter');
  if(req.session.user){
    var username = req.session.user;
    console.log(req.cookies.user)
    res.render('home',{user : username,usercookie : req.cookies.user})
  }else{
    res.redirect('/login')
  }
});

router.get('/counter', function(req, res, next) {
  res.clearCookie('counter');
  if (req.session.views) {
    req.session.views++
    res.setHeader('Content-Type', 'text/html')
    res.write('<h1><p>views: ' + req.session.views + '</p></h1>')
    res.end()
  } else {
    req.session.views = 1
    res.end('<h1>welcome !!!!!</h1>')
  }
})

router.get('/cookiecounter', function(req, res, next) {
  if(req.session.page_views){
    req.session.page_views++;
    res.cookie('counter',req.session.page_views);
    res.send("<h1>Count of visits" +"  "+ req.session.page_views + "</h1>");
 } else {
    req.session.page_views = 1;
    res.send("<h1>Welcome !!!!</h1>");}
});


router.get('/logout', function(req, res, next) {
  req.session.destroy(function(err){
    res.clearCookie('user');
    res.clearCookie('counter');
    res.redirect('/login')
  })
});

module.exports = router;




