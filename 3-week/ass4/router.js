// const { urlencoded } = require("body-parser");
const express = require("express");
const router = express.Router();
// const app = express();
var path = require('path');

// app.use(express.json());
// app.use(urlencoded({extended:false}));

// app.listen(83,() => {
//     console.log("Running on 83");
// })

router.get('/', (req,res,next) => {
    console.log("Landing login....")
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
})

let myArray = {guest:['Nuts',"Legumes"],

owner:['Vegetables','Nuts','Fruits',"Legumes"]}

router.post("/postData", (req,res, next) => {
    console.log("In the post....",myArray.guest.length,myArray.owner.length);
    let isGuest = false;
    for(let i = 0; i < myArray.guest.length; i++){
        if(req.body.name === myArray.guest[i]){
            console.log("I am guest")
            isGuest = true;
            console.log("path",path.join(__dirname,"html","view.html"));
            res.sendFile(path.join(__dirname,"html","view.html"));
            break;
        }
    }

    if(isGuest === false){
        for(let i = 0; i < myArray.owner.length; i++){
            if(req.body.name === myArray.owner[i]){
                console.log("I am owner")
                isGuest = true;
                console.log("path",path.join(__dirname,"html","view.html"));
                res.sendFile(path.join(__dirname,"html","view.html"));
                console.log("next page")
                break;
            }
        }
    }

    if(!isGuest){
        res.send("User not found!")
    }       
})

module.exports = router;