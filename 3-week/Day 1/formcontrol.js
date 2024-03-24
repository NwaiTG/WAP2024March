const express = require('express');
const app = express();
var path = require("path");

// Serve images from the 'images' directory
app.use('/images', express.static('images'));
app.use('/images', express.static('images'));

app.listen(3000, ()=>{
    console.log('Your Server is running on 3000');
})

// Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.post("/postFormData", function(req,res){
    console.log("In the post of form data", req.body.txt,
    req.body.rad_con, req.body.chk_con, req.body.txt_message,req.body.opt1_sel);
    res.send({
        txt1:req.body.txt,
        rad_Selected:req.body.rad_con,
        chk_data:req.body.chk_con,
        message:req.body.txt_message,
        opt1_val:req.body.opt1_sel,
        opt2_val:req.body.opt2_sel,
        opt3_val:req.body.opt3_sel
    })
});

app.get("/formcontrol", function(req,res,next){
    console.log("In the view of formcontrol", path.join(__dirname));
    res.sendFile(path.join(__dirname,"html", "formcontrol.html"));
})