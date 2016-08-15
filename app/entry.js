document.write("It works.<br>");

document.write(require("./content.js"));

var button = require("./widgets/button.js");
var form = require("./widgets/form.js");
var table = require("./widgets/table.js");

button.printDescription();
form.printDescription();
table.printDescription();
