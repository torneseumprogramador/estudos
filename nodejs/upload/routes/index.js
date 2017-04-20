var express = require('express');
var router = express.Router();
var formidable = require('formidable');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload', function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.parse(req, function(err, body, files) {

      console.log("============");
      console.log(body.submit);
      console.log(files.arquivo.path);
      console.log(files.arquivo.name);
      console.log("============");

      fs = require('fs');
      fs.readFile(files.arquivo.path, 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }

        lines = data.split("\n");
        for(var i=0;i<lines.length; i++){
          console.log(lines[i]);
        }
        
        res.render('index', { title: 'Express' });
        
      });

    });
});

module.exports = router;
