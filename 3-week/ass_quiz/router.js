const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname,'html', 'credit.html'));
})

var cardNo = "";
route.post('/submitCard', (req, res, next)=>{
    var type = req.body.rad;
    var no = req.body.txt_card;
    var mth = req.body.opt_mth;
    var yr = req.body.opt_yr;
    cardNo = type+no+mth+yr;
    console.log(cardNo);
    res.sendFile(path.join(__dirname,'html','opt.html'));
})

route.post('/submitOPT', (req, res, next)=>{
    if(cardNo === req.body.txt_otp){
        res.send("<p style='color:green'>Transaction Successful!!!</p>");
    }else{
        res.send("<p style='color:red'>Transaction Fail!!!</p>");
    }
})

module.exports = route;