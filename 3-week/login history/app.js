const express = require('express');
const app = express();
var path = require('path');

app.listen(3004, () => {
    console.log("Running on 3004");
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));

let array = ['apple','banana'];
let credentials = [{username:'shruti',password:'wap'},{username:'john',password:'123'}];

app.get('/login',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"/html/login.html"))
})

app.get('/add',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"/html/addtodolist.html"))
})

app.post("/add", (req,res,next)=>{
    let fruit = req.body.fruit;
    if(array.indexOf(fruit)<0 && fruit){
        array.push(fruit);
    }
    res.send(array);
})

app.post("/login",(req,res,next)=>{
    let username = req.body.username;
    let password = req.body.password;
    console.log("In the post....")

    for(let cred of credentials){
        if(cred.username==username && cred.password==password){
            res.send('User Already exists');
            break;
        }
    }
    credentials.push({username:username,password:password});
    res.send("success");
})

