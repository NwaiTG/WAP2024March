const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');
const cookie = require('cookies-parser');
const cookieParser = require('cookie-parser');

app.listen(81, ()=>{
  console.log("Running on 81...");
})

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

let fruits = [];
app.get('/', (req, res, next)=>{
  res.cookie("example",1);
  // if(!req.cookies.example2){
    console.log("in landing", req.cookies)
    res.cookie("example2",{a:1});
  // }
    
  console.log(req.cookies);
  res.render('template', {data:fruits});  
})

app.get('/req', (req, res,next)=>{
  console.log("REQQQ")
  res.send("REQ");
})

app.get('/basic', (req, res, next)=>{
  res.sendFile(path.join(__dirname, 'views', 'basic.html'))
})

app.post("/postReq", (req,res,next)=>{
  res.send("postReq");
})

app.post('/post', (req,res,next)=>{
  console.log(req.cookies);
  let myEg = req.cookies.example2;
  myEg.a = req.body.fruit;

  console.log(myEg);
  res.cookie('example2', myEg);
  fruits.push(req.body.fruits);
  // res.redirect('/');
  res.redirect('back');
})