const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.listen(83, ()=>{
    console.log("Running on 83");
})
let products = [];
let id = 0;
app.get('/',(req,res,next)=>{
    res.render('index', {products: products})
})

// products = 
// [
// {prodId:1, prodName:"asdf", prodPrice:3000, prodQty:3},
// {prodId:1, prodName:"asdf", prodPrice:3000, prodQty:3}
// ]

app.post('/postData', (req,res,next)=>{
    console.log(req.body);
    id++;
    let name = req.body.txt_name;
    let price = req.body.txt_price;
    let qty = req.body.txt_qty;
    let prod_id = req.body.hid_prod_id;
    
    if(req.body.hid_action === 'add'){
        let prod = {prodId: id, prodName: name, prodPrice: price, prodQty: qty};
        products.push(prod);
    }else if(req.body.hid_action === 'edit'){
        for(let prod of products){
            if(prod.prodId == prod_id){
                prod.prodName = name;
                prod.prodPrice = price;
                prod.prodQty = qty;
            }
        }
    }else{
        // console.log("action_del",req.body.hid_action);
        for(let i = 0; i < products.length; i++){
            if(products[i].prodId == prod_id){
                products.splice(i,1);
                break;
            }
        }
    }
    console.log(products);    

    // res.render('index', {products: products})
    res.redirect('back');
})