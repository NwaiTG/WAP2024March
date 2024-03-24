const express = require('express');
const app = express();
const route = require('./router');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(82, ()=>{
    console.log("Running on 82");
})

app.use(route);

app.use((req,res,next)=>{
    res.send(404);
})