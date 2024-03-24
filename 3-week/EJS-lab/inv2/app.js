const express = require('express');
const ejs = require('ejs');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.listen(81, ()=>{
  console.log("Running on 81...");
})

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

let prods = [{id:1, name:"AAA", price:400, qty:100},
            {id:2, name:"BBB", price:400, qty:100}]

app.get('/',(req,res,next)=>{
    console.log(prods);
    res.render('index',{prods:prods});
})
let id = 2;
app.post('/post',(req,res,next)=>{
    console.log("In the post");
    if(req.body.hid_action === 'add'){
        let prod = {
            id:id++, 
            name: req.body.txt_name,
            price:req.body.txt_price,
            qty:req.body.txt_qty
        }
        prods.push(prod);
    }
    else if(req.body.hid_action === 'edit'){
        prods.map(prod=>{
            if(prod.id == req.body.hid_id){
                prod.name = req.body.txt_name;
                prod.price = req.body.txt_price;
                prod.qty = req.body.txt_qty;
            }
        })
    }
    else if(req.body.hid_action === 'del'){
        console.log(req.body.hid_action, req.body.hid_id)
        // for(let i = 0; i < prods.length; i++){
        //     if(prods[i].id == req.body.hid_id){
        //         prods.splice(i, 1);
        //     }
        // }
        
        prods = prods.filter(prod => prod.id != req.body.hid_id);
        console.log("filter", prods)
    }
    
    res.redirect('back');
    // res.render('index',{prods:prods});
})