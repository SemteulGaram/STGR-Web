var express = require('express');
var fs = require('fs');
var formidable = require("formidable");
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

router.post('/001',  function(req, res) {
  var form = new formidable.IncomingForm();

  form.parse(req, function (err, fields, files) {
        //Store the data from the fields in your data store.
        //The data store could be a file or database or any other store based
        //on your application.
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.write('received the data:\n\n');
        res.end(util.inspect({
            fields: fields,
            files: files
        }));
    });
});

module.exports = router;
