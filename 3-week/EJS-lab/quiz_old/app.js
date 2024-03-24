const express = require('express');
const app = express();
const router = require('./router');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(81,()=>{
    console.log("Running on 81");
});

app.use(router);

app.use((req,res,next)=>{
    res.send(404);
})