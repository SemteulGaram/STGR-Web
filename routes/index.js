"use strict";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'SemteulGaram', analyse: "===request===\n" +
  analyser(req) + "===response===\n" + analyer(res)});
});

function analyser(obj) {
  return typeof obj === "object") Object.getOwnPropertyNames(obj).join("\n")
  : obj + "";
}

module.exports = router;
