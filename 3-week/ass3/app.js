const express = require('express');
const app = express();
var path = require("path");

app.listen(3002,()=>{
    console.log("Your server is running on 3002");
})

// Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/index", function(req,res){
    console.log("Index Landing");
    res.sendFile(path.join(__dirname,"html","index.html"));
})

var obj = {};
app.post("/post", function(req,res){
    console.log("In a post....");
    // if(typeof req.body.number === 'number'){
        if(!isNaN(req.body.number)){
        console.log("number....");
        if(req.body.number%2 === 0 && req.body.rad === 'even'){
            console.log("even")
            obj[req.body.number] = req.body.rad;
        }
        else if(req.body.number%2 === 1 && req.body.rad === 'odd')
        {
            console.log("odd")
            obj[req.body.number] = req.body.rad;
        }
        console.log(req.body.number, req.body.rad)
        res.send(obj);
    }
})