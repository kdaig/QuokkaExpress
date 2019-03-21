var express = require("express");
var app = express();


app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallenlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: "quokka"});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is listening!");
});