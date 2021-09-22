var express = require('express');
var router = express.Router();
const multer = require('multer');
const nodemailer = require("nodemailer");
/* GET home page. */
router.get('/',(req,res) => {
  res.render('index');
})

var to;
var subject;
var body;
var path

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./images");
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({
    storage: Storage
}).single("image"); 

router.get('/',(req,res) => {
  res.render('index');
})

router.post('/sendemail',(req,res) => {
    upload(req,res,function(err){
        if(err){
            console.log(err)
            return res.end("Something went wrong!");
        }else{
            to = req.body.to
            subject = req.body.subject
            body = req.body.body
            path = req.file.path
            console.log(to)
            console.log(subject)
            console.log(body)
            console.log(req.file)
            console.log(req.files)
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                  user: 'pr3380611@gmail.com',
                  pass: 'Dixit@000'
                }
              });
              
              var mailOptions = {
                from: 'pr3380611@gmail.com',
                to: to,
                subject:subject,
                text:body,
                attachments: [
                  {
                   path: path
                  }
               ]
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  res.send("<h1>E-mail Sent</h1>")
                  fs.unlink(path,function(err){
                    if(err){
                        return res.end(err)
                    }else{
                        console.log("deleted")
                        return res.send('Email sent')
                    }
                  })
                }
              });
        }
    })
})


module.exports = router;
