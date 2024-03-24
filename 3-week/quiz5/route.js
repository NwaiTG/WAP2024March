const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/' , (req, res, next) => {
    res.sendFile(path.join(__dirname, 'html', 'creditCard.html'));
})
let creditNum;
route.post('/submitCredit', (req, res, next) => {
    let data = req.body;
    creditNum = data.ccType + data.cardNumber + data.month + data.year;
    console.log(creditNum);
    res.sendFile(path.join(__dirname, 'html','otp.html'));
})

route.post('/enterOTP', (req, res, next) => {
    if(req.body.input === creditNum){
        res.send('<p style="color: green;">Transaction Success!!!</p>');
    }else {
        res.send('<p style="color: red;">Transaction Failed!!!</p>');
    }
})

module.exports = route;