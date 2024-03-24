const express = require('express');
const app = express();
var path = requrie('path');

app.listen(81, () => {
    console.log("Running on 81");
})

app.use(express.json());
app.use(express.urlencoded({extended:false}));

let array = ['apple', 'banana'];

app.get('/',(res,req,next)=>{
    res.sendFile(path.join(__dirname,'index.html'));
})

app.post('/postData',(req,res,next)=>{
    res.redirect('back');
})

app.get('/view', (req,res,next)=>{
    res.send("view");
})