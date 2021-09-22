var express = require('express');
var multer = require('multer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{title:"Express"});
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/form', function(req, res, next) {
  res.render('form');
});

router.get('/formMulter', function(req, res, next) {
  res.render('formMulter');
});


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
}).single("image/jpeg");

router.post('/api/file',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        
        res.end("File is uploaded");
        
    });
});


router.post('/formprocess', function(req, res, next) {
  var fileName = req.files.file.name;
  var fileType = req.files.file.mimetype;
  var fileSize = req.files.file.size;
  var fileObject = req.files.file;
  
  if(fileSize <= 2*1024*1024 && (fileType == 'image/jpeg' || fileType == 'image/png') ){
    fileObject.mv('public/uploadFiles/' + fileName,function(err){
      if(err) throw err;
      res.send("File Uploaded...")
    })
  } else{
    res.send('<h1> File size must be 2Mb and Type of file is jpeg only allowed.</h1>')
  }
  console.log(fileObject);
});


module.exports = router;
