console.log("server starting");

var express = require("express");

var app = express();

function listening() {
    console.log("listening");
}

app.use(express.static("website"));

var server = app.listen(3000, listening);
