var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'SemteulGaram', analyse: "===request===\n" +
  analyserParseToHtml(analyserParser(analyser(req, "request", 5))) + "===response===\n" + analyserParseToHtml(analyserParser(analyser(res, "response", 5)))});
});

function ObjectInfo(type, name, obj) {
  this.type = type;
  this.name = name;
  this.obj = obj;
}

function analyser(obj, objName, maxDepth) {try{
  if(typeof obj === "object") {
    if(maxDepth > 1) {
      let names = Object.getOwnPropertyNames(obj);
      let result = [];
      for(let i in names) {
        result.push(analyser(obj[names[i]], names[i], maxDepth - 1));
      }
      return new ObjectInfo("parsed-object", objName, result);
    }else {
      return new ObjectInfo(typeof obj, objName, obj);
    }
  }else {
    return new ObjectInfo(typeof obj, objName, obj);
  }
}catch(err) {
  return new ObjectInfo("Error-" + typeof obj, objName, err)
}}

function analyserParser(obj) {
  return _analyserParser(obj, 0);
}

function _analyserParser(obj, depth) {
  let result = "";
  for(let i = 0; i < depth; i++) {
    result += "-";
  }
  if(obj.type !== "parsed-object") {
    result += "[" + obj.type + "] " + obj.name + ": " + objectToString(obj.obj);
  }else {
    result += "[" + obj.type + "] " + obj.name + ":" + "\n";
    for(let i = 0; i < obj.obj.length; i++) {
      result += _analyserParser(obj.obj[i], depth + 1) + "\n";
    }
  }
  return result;
}

function analyserParseToHtml(str) {
  let lines = str.split("\n");
  let result = "";
  for(let i in lines) {
    result += ("<p>" + lines[i] + "</p>\n");
  }
  return result;
}

function objectToString(obj) {try {
  return "" + obj;
}catch(err) {
  return "UNKNOWN OBJECT"
}}

module.exports = router;
