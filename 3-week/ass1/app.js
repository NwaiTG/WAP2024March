const express = require('express');
const app = express();
var path = require("path"); // to load other module

app.listen(3001, function(){
    console.log("Your server is running on 3001");
});

// Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get("/exam", function(req,res){
    console.log("Exam landing");
    res.sendFile(path.join(__dirname,"html","exam.html"))
});

const users = []
var counter = 0;
app.post("/post", function(req,res){
    counter++;
    console.log("In the post", req.body.name, req.body.age, counter);
    var user = {name: req.body.name, age: req.body.age};
    users.push(user)
    res.send({users, counter});
})