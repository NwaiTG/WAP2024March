const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');
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

var list = {
    Personal: {name:'Ram', alias: 'Lakshman', age: 32 },
    Preferences: [{ color: 'blue', theme: 'Azure' },
                { color: 'yellow', theme: 'Imagination' }]}

app.get('/', (req,res,next)=>{
    console.log("land...");
    res.render('index', {list:list});
})                

app.post('/post', (req,res,next)=>{
    console.log("In the post");
    let txt = [];
    for(let ele in req.body){
        let lb = ele;
        lb += ": " + req.body[ele];
        txt.push(lb);
    }
    console.log(txt);
    res.render('preview', {obj:txt});
})