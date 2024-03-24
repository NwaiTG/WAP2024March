const express = require('express');
const app = express();
var path = require('path');
const route = require('./router');

app.listen(3003, () => {
    console.log("Your server is running on 3003")
})

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.get("/login", function(req,res){
//     console.log("Login Landing...")
//     console.log("path", path.join(__dirname,"html","login.html"))
//     res.sendFile(path.join(__dirname,"html","login.html"));
// })

app.use(route);

app.use((req,res,next)=>{
    res.send("400");
})