"use strict";
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'SemteulGaram', analyse: "===request===\n" +
  analyser(req) + "===response===\n" + analyer(res)});
});

function analyser(obj) {
  if(typeof obj !== "object") return obj + "";
  let result = "";
  for(let i in obj) result += i + ": " + obj[i];
  return result;
}

module.exports = router;
