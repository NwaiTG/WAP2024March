var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path");

app.listen(82, function () {
    console.log(" Your server started listening 82")
})

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

let fruits = ['apple','pear'];
app.get("/", function (req, res, next) {
    // res.render('index',{data:fruits});
    res.render('index',{form:{name:'Ram',skills:['java','javascript']}})
})

