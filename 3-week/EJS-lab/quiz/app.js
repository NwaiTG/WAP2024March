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

app.get('/', (req,res,next)=>{
    // res.render('index', {seat:"",msg:""});
    res.render('index', {seat:"",sel_date:"", sel_dest:"",msg_succ:"", msg_fail:"", hid_action:"add"});
})

let array = [{depDate:'2024-03-15',dest:'Fairfield',seats:3},
            {depDate:'2024-03-16',dest:'Chicago',seats:2}];

app.post('/search',(req,res,next)=>{
    console.log("serch...");
    let msg = "";
    let msg_f = "";
    let ava_seat = 0;
    
    // let ava_seat = array.map(arr =>{
    //     if(arr.depDate === req.body.txt_date && arr.dest === req.body.sel_dest){
    //         console.log(req.body.txt_date,req.body.sel_dest)
    //         return arr.seats;
    //     }
    // })

    for(let i = 0; i < array.length; i++){
        if(array[i].depDate === req.body.txt_date && array[i].dest === req.body.sel_dest){
            ava_seat = array[i].seats;
        }
    }

    console.log(array);
    console.log(ava_seat);

    if(!ava_seat){
        msg_f = "No result found."
    }

    res.cookie("ava_seat",ava_seat);
    res.cookie("sel_date", req.body.txt_date);
    res.cookie("sel_dest", req.body.sel_dest);
    res.render('index', {seat:ava_seat,sel_date:req.cookies.sel_date,sel_dest:req.cookies.sel_dest ,msg_succ:"", msg_fail:msg_f, hid_action:"search"});
})

app.post('/book',(req,res,next)=>{
    console.log("book...");  
    console.log(req.body.sel_seat);
    let msg = "";
    let msg_f = "";
    let ava_seat = 0;

    console.log("check seat",req.cookies.ava_seat, req.body.sel_seat)
    if(req.cookies.ava_seat >= req.body.sel_seat){
        array.map(arr =>{
            if(arr.depDate === req.cookies.sel_date && arr.dest === req.cookies.sel_dest){
                console.log('update seat',req.cookies.sel_date,req.cookies.sel_dest)
                arr.seats -= req.body.sel_seat;
                msg='success';
                res.cookie("sel_date","");
                res.cookie("sel_dest","");
            }
        })   
        
        for(let i = 0; i < array.length; i++){
            if(array[i].depDate === req.body.txt_date && array[i].dest === req.body.sel_dest){
                ava_seat = array[i].seats;
            }
        }
        res.render('index', {seat:ava_seat,sel_date:"", sel_dest:"", msg_succ:msg, msg_fail:msg_f, hid_action:"book"});
    }else{
        msg_f = 'Not enought seat.'
        res.render('index', {seat:ava_seat,sel_date:req.cookies.sel_date, sel_dest:req.cookies.sel_dest, msg_succ:msg, msg_fail:msg_f, hid_action:"book"});
    }   
    
    console.log(array);
    // res.render('index', {seat:ava_seat,sel_date:req.cookies.sel_date, msg_succ:msg, msg_fail:msg_f, hid_action:"book"});
})
