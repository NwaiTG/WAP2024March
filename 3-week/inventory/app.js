const express = require('express');
const app = express();
var path = require("path");
var router = require('./router')

app.listen(81, () => {
    console.log('Your Server is running on 81');
})
//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/product',router)
// app.use(router);
// app.use((req,res,next)=>{
//     res.send(404);
// })