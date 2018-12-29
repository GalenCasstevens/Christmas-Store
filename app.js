var express = require("express");
var app = express();

var hostname = "127.0.0.1",
    port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res) {
  res.render("index");
});

app.listen(port, hostname, function() {
  console.log("Server starting...");
});
