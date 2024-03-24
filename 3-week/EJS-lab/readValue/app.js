const express = require('express');
const app = express();
const ejs = require('ejs');

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(81, ()=>{
    console.log("Server Listening on 81");
})

let obj = [];

app.get('/', (req,res,next)=>{
    console.log("Landing....");
    res.render('index', {obj:obj});
})

app.post('/post', (req,res,next)=>{
    console.log("In the post....");
    let data = req.body;
    const pre = req.body.sel_ref;
    let di = "";
    if(data.chk_vegan){
        di += data.chk_vegan;
    }

    if(data.chk_nut){
        if(di !== ""){
            di = di + ", " + data.chk_nut;
        }
        else
            di += data.chk_nut;
    }

    obj = {
        name: "Selected Name: " + data.txt_name,
        desc: "Description: " + data.txt_desc,
        cty: "Country: " + data.sel_cty,
        // pref: "Preference: " + pre.join(', '),
        pref: "Preference: " + req.body.sel_ref.join(', '),
        gender: "Gender: " + data.rad_gen,
        diet: "Diet: " + di
    }
    // res.redirect('back' + encodeURIComponent(JSON.stringify(obj)));
    res.render('index', {obj:obj})
})