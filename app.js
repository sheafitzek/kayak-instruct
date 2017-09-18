const express = require("express");
const app = express();

app.get("/", function(req, res){
	console.log("Home request made.")
	res.render("home.ejs");
});

app.get("*", function(req, res){
	res.send("Ut Oh. Page Not Found.");
});

app.listen(3000, function(){
	//run node app.js then go to url http://localhost:3000/
	console.log("Server is listening...");
});
