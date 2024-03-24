const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    console.log("Landing....");
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
})

// {"Lamsom":[{rating:4, recommendation:No,desc:adfadf},
//             {rating:4, recommendation:No,desc:adfadf},],
//   "Kewash":[{rating:4, recommendation:No,desc:adfadf},]}

router.get('/rating', (req, res, next) => {
    console.log("Landing Rating....");
    res.sendFile(path.join(__dirname, 'html', 'rating.html'));

    let avg = 0;
    let obj = {};
    for(let key in mainObj){
        let sum = 0;
        let ele = mainObj[key];
        console.log(ele);
        for(let i = 0; i < ele.length; i++){
            sum += parseInt(ele[i].rating);
        }
        avg = sum/ele.length;
        obj[key] = avg;
        console.log(sum, avg, ele.length);
    }
    res.send(obj);
})

let mainObj = {};
let name = [];
router.post('/postTrip', (req,res,next)=>{
    var data = req.body;
    console.log("name", name);
    if(data.chk_wood === 'Lamsom'){
        name.push(data.chk_wood);
    }
    
    if(data.chk_trail === 'Kewash'){
        name.push(data.chk_trail);
    }
    
    if(data.chk_wood !== 'Lamsom' && data.chk_trail !== 'Kewash'){
        res.send("NO SELECTION");
    }else{
        res.sendFile(path.join(__dirname, 'html', 'review.html'));
    }

})

// {"Lamsom":[{rating:4, recommendation:No,desc:adfadf}, {rating:4, recommendation:No,desc:adfadf}],
//  "Kewash":[{rating:4, recommendation:No,desc:adfadf}]}

router.post('/review', (req,res,next)=>{
    var data = req.body;
    var rate = data.rd_rate;
    var recommand = data.opt_recm;
    var desc = data.txt_cmt;

    let obj = {rating: rate, recommendation: recommand, desc: desc};

    console.log(mainObj, name.length);
    for(let i = 0; i < name.length; i++){
        if(mainObj.hasOwnProperty(name[i])){
            mainObj[name[i]].push(obj);       
        }else{
            mainObj[name[i]] = [];
            mainObj[name[i]].push(obj); 
        }
    }    
    name = [];

    res.send(mainObj);;
})

module.exports = router