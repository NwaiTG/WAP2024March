const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req,res,next)=>{
    console.log("Landing.....");
    res.sendFile(path.join(__dirname,'html','guessnum.html'));
})

var num = 9;
var attempt = 0;
router.post('/postGuessNum', (req,res,next)=>{
    attempt++;
    console.log("In the post....", req.body.guess_num, attempt, num);
    if(num == req.body.guess_num && attempt <= 3){
        attempt = 0;
        res.send("You win after " + attempt + "attempts");
    }else if(attempt > 3){
        attempt = 0;
        res.sendFile(path.join(__dirname, 'html', 'stackover.html'));        
    }
    else
    {
        res.sendFile(path.join(__dirname,'html','guessnum.html'));
    }
})

// export module to use in app.js
module.exports = router;