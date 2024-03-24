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

// let skillset = {
//     java: { "Core Java": 10, "Java Build Tools": ['Apache', 'SonaType'] },
//     javascript: { "HTML/CSS": 10, "Source Control": ['SVN', 'Mercurial'] }
//     }

app.get('/', (req,res,next)=>{
    console.log("Landing")
    res.render('language', {data:skillset})
})

app.post('/lanChoose',(req,res,next)=>{

    let fw = {};
    if(skillset.hasOwnProperty(req.body.rad_lan)){
        fw = skillset[req.body.rad_lan]
    }
    
    res.cookie("ck_lan", req.body.rad_lan);
    console.log(fw);
    res.render('framew', {data:fw})
})

let skillset = {
    java: { "Core Java": 10, "Java Build Tools": ['Apache', 'SonaType'] },
    javascript: { "HTML/CSS": 10, "Source Control": ['SVN', 'Mercurial'] }
    }
app.post('/chooseFW',(req,res,next)=>{
    console.log("In choose FW....")
    let fw = [];
    if(skillset.hasOwnProperty(req.cookies.ck_lan)){
        for(let key in skillset[req.cookies.ck_lan]){
            fw.push(key);
        }
    }    

    let ren_lan = fw[0] + " " + req.body.txt_name;
    let ren_fw = fw[1] + " " + req.body.sel_tools;
    console.log(req.body);
    console.log("label", req.body.lb_name);
    for(let key in req.body){
        console.log(key);
    }
    res.render('preview', {lan:ren_lan,fw:ren_fw});
    // res.send(req.body);
})