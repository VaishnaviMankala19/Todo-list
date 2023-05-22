const express = require("express");
const bodyParser = require("body-parser");
const dates = require(__dirname + "/date.js");

const app = express();

let list=[];
let newlist=[];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine" , "ejs");

app.get("/" , function(req , res){
    
    const day = dates();
    res.render("todo" , {day:day , list:list} );
})

app.get("/work" , function(req,res){
    res.render("todo" , {day:"WORK" , list:newlist})
})

app.post("/" , function(req,res){
   const  newitem = req.body.item;
   const type=req.body.submit;
//    console.log(type);
   if (type==="WORK")
   {
    newlist.push(newitem);
    res.redirect("/work");
   }
   else
   {
    list.push(newitem);
    res.redirect("/");
   }
})

app.listen(3000, function(){console.log("port started!");});