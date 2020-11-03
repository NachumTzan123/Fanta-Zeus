//jshint esversion:8

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mydb = require(__dirname+"/mongodb_exports.js");

const app = express();
app.use(express.static("Public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
  res.render("index");
});

app.listen(3000, function(){
  console.log("Server has started on port 3000!");
});
