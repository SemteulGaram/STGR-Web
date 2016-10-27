var express = require('express');
var fs = require('fs');
var util = require('util');
var router = express.Router();

router.get('/001', function(req, res, next) {
  fs.readFile(__dirname + '/../public/html/001.html', function (err, data) {
    if(err) {
      res.writeHead(200, {
          'content-type': 'text/plain'
      });
      res.write(__dirname + '/public/html/001.html' + "\n" + err);
      res.end();
    }else {
      res.writeHead(200, {
          'Content-Type': 'text/html',
          'Content-Length': data.length
      });
      res.write(data);
      res.end();
    }
  });
});

router.post('/001',  function(req, res, next) {

  var form = new formidable.IncomingForm();
  console.log("test");

  form.parse(req, function (err, fields, files) {

        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n' + fields.form1);
        res.end();
    });

  // res.writeHead(200, {
  //          'content-type': 'text/plain'
  //      });
  // res.write('data : ' + req.body.form1);
  // res.end();

  // let form = new formidable.ImcomingForm();
  //
  //
  // res.writeHead(200, {
  //   "Content-Type": "text/html",
  //   "Content-Length": data.length
  // });
  // res.write();
  // res.end();
});

router.get('/login', function(req, res, next) {
  res.render('tlogin', {});
});

router.post('/login', function(req, res, next) {
  console.log(req.body);
  res.writeHead(200, {
    'content-type': 'text/plan'
  });
  res.write('id: ' + req.body.id + " / pw: " + req.body.pw);
  res.end();
});

module.exports = router;
