const express = require('express');
const router = express.Router();
const path = require('path');
const { isNumberObject } = require('util/types');

router.get('/', (req, res, next) => {
    console.log("Landing....");
    res.sendFile(path.join(__dirname, 'html', 'selectfalvor.html'));
})

let resObj = {};
let tempObj = {};
function validation(req, res, next){
    console.log("In validation...")
    var isFlavor = false;
    const chkArr = ['chk1', 'chk2','chk3','chk4'];
    for(let i = 0; i < chkArr.length; i++){
        console.log(req.body[chkArr[i]]);
        if(req.body[chkArr[i]] === 'Vinalla' || req.body[chkArr[i]] === 'Chocolate' || req.body[chkArr[i]] ===  'Pistachio' || req.body[chkArr[i]] ===  'Mango'){            
            isFlavor = true;
            tempObj[req.body[chkArr[i]]] = 0;
            console.log("obj", tempObj);
        }
    }

    if(!isFlavor){
        res.sendFile(path.join(__dirname,'html','error.html'));
    }
    else{
        next();
    }
    console.log(resObj);
}

router.post('/validateFalvor', validation, (req, res, next) => {
    console.log("In post falvor....");
    res.sendFile(path.join(__dirname, 'html', 'selectqty.html'));
})

function qty_validation(req, res, next){
    if(isNaN(req.body.txt_qty)){
        res.send("select qty");
    }else{
        next();
    }
}

router.post('/postQty', qty_validation, (req, res, next) => {
    console.log("In post Qty....");
    for(let ele in tempObj){
        console.log(ele);
        if(resObj.hasOwnProperty(ele)){
            console.log("OLD.....")
            resObj[ele] += parseInt(req.body.txt_qty);
        }else{
            console.log("NEW.....")
            resObj[ele] = parseInt(req.body.txt_qty);
        }
    }
    tempObj = {};
    res.send(resObj);
})

module.exports = router;