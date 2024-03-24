const express = require('express');
const app = express();
const route = require('./router');

// app.use(express.json());
// app.use(urlencoded({extends:false}));

app.listen(83, ()=>{
    console.log("Running on 83");
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use(express.urlencoded({ extended: false }));

app.use(route);

app.use((req,res,next)=>{
    res.send(400);
})