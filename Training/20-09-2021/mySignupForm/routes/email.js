var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('email');
});

// router.get('/formprocess', function(req, res, next) {
//   var a = req.body.name;
//   var b = req.body.lastname;
//   var c = req.body.email;
//   var d = req.body.phno;
//   var e = req.body.password;
//   var f = req.body.gender;
//   res.render('index' , {name:a,lastname:b,email:c,phno:d,password:e,gender:d})
// });

router.post('/email', function(req, res, next) {
  
  var a = req.body.from;
    var b = req.body.to;
    var c = req.body.subject;
    var d = req.body.message;
    var e = req.body.password;

    
  
const nodemailer = require("nodemailer");
// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: a, // generated ethereal user
      pass: e, // generated ethereal password
    },
  });

  

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: a, 
    to: b, // list of receivers
    subject: c, // Subject line
    html: d, // html body
  });
  res.send("Form Submitted")
 
}

main().catch(console.error);

});

module.exports = router;
