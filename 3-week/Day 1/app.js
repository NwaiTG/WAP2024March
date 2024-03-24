const express = require('express');
const app = express();
var path = require("path");

app.listen(81, function() {
    console.log('Your Server is running on 81');
});

// Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/cate/:id/:name", (req,res,next)=>{
    res.send(req.params);
    console.log(req.params); 
})


app.get("/", function (req, res, next) {
    res.send("Welcome to MIU ");
})

app.get("/cat", function (req, res, next) {
    // res.send("Welcome to Category ");
    res.send(req.query);
})

app.get("/admin", function (req, res, next) {
    console.log('Admin Landing');
    res.send('<form action="/postData" method="post">Name<input name="name"/> Skill<input name="skill"/><input type="submit" value="submit"/></form>');
});

let counter = 0;
app.post("/postData", function (req, res, next) {
    counter++;
    console.log('In the post', req.body.nam, req.body.skill);
    res.send({
        names:req.body.nam,
        skills: req.body.skill,
        counters: counter
        })
});

app.post("/postFormData", function(req,res){
    console.log("In the post of form data", req.body.txt,
    req.body.rad_con, req.body.chk_con, req.body.txt_message,req.body.opt1_sel);
    res.send({
        txt1:req.body.txt,
        rad_Selected:req.body.rad_con,
        chk_data:req.body.chk_con,
        message:req.body.txt_message,
        opt1_val:req.body.opt1_sel,
        opt2_val:req.body.opt2_sel,
        opt3_val:req.body.opt3_sel
    })
});

app.get("/index", function (req, res, next) {
    console.log('In the view',path.join(__dirname));
    res.sendFile(path.join(__dirname,"html","index.html"));
});

app.get("/formcontrol", function(req,res,next){
    console.log("In the view of formcontrol", path.join(__dirname));
    res.sendFile(path.join(__dirname,"html", "formcontrol.html"));
})