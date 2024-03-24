var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(82, function () {
    console.log(" Server Listening")
})

let flowers = [];

app.get('/', function (req, res, next) {
    res.render('index',
        { flowers: flowers })
})

app.post('/post', (req,res,next)=>{
    flowers.push(req.body.txt);

    res.redirect('back');
})