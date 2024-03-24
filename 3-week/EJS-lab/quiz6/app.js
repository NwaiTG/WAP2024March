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
    console.log("Land")
    res.render('index');
})

app.post('/join',(req,res,next)=>{
    console.log("Joinn.....")
    if(req.body.txt_name){
        chat.push({name:req.body.txt_name, msg:[] })
    }

    let users = chat.map(ch => {
        return ch.name;
    })

    res.cookie("cur_user", req.body.txt_name);
    res.cookie("users", users);

    console.log(users);

    let msg = [];

    res.render('chat', {users:users, sel_user:'', curr_user:req.body.txt_name, msg:msg})
})

let chat = [{name:"dewi", msg:["sri:::hello", "devid:::how are you"]},
            {name:"sri", msg:["dewi:::hello"]}]

app.post('/getmsgbyuser', (req,res,next)=>{
    console.log("getmsgbyuser....");

    let msg = chat.map(ch => {
        if(ch.name === req.body.sel_user){
            return ch.msg;
        }
    })

    console.log(chat);
    res.render('chat', {users:req.cookies.users, sel_user: '', curr_user:req.body.txt_name, msg:msg})
})

app.post('/addmsg', (req,res,next)=>{
    console.log("add msg.....")
    console.log(req.body.sel_user);

    let tm = new Date();
    let newMsg = req.cookies.cur_user + ":::" + req.body.txt_msg + " " + tm.getHours() + ":"+ tm.getMinutes() + ":" + tm.getSeconds();

    chat.map(ch => {
        if(ch.name === req.body.sel_user){
            ch.msg.push(newMsg);
        }
    })

    let msg = chat.map(ch => {
        if(ch.name === req.body.sel_user){
            return ch.msg;
        }
    })

    console.log(chat);
    res.render('chat', {users:req.cookies.users, sel_user: req.body.sel_user, curr_user:req.body.txt_name, msg:msg})
})