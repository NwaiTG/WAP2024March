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

let carSearch = {model:'', manufactures:['Audi','Acura','BMW'], years:['2020','2021']}

app.get('/',(req,res,next)=>{
    console.log("Landing....");
    let model = req.cookies.model || carSearch.model;
    let manuS = req.cookies.manu || '';
    let yearS = req.cookies.years || '';
    res.render('carSearch', {model:model, manufactures:carSearch.manufactures, years:carSearch.years, manuS, yearS});
})

app.post('/post', (req,res,next)=>{
    console.log("In post..........");
    let data = req.body;
    let selectedData = {
        model: data.txt_model,
        manufactures:  data.rad_make,
        years: data.rd_year
    };
    res.cookie("model", data.txt_model);
    res.cookie("manu", data.rad_make);
    res.cookie("years", data.rd_year);
    res.render("preview",{data: selectedData});
})