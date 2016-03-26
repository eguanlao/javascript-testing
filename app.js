"use strict";

var express = require("express");
var tools = require("./tools.js");

var app = express();

app.get("/", function(req, res) {
  var lines = [];
  lines.push("Hello, world!");
  lines.push(tools.foo());
  lines.push(tools.bar());
  res.send(lines.join());
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
