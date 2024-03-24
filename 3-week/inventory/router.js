const express = require('express');
const ejs = require('ejs');
const path = require('path');
const options = {
    "caseSensitive": true,
    "strict": true
};
const router = express.Router(options);
// const router = express.Router();
let products = [];

router.get('/', (req, res, next) => {
    console.log("Landing......", path.join(__dirname,'html','product.html'))
    res.sendFile(path.join(__dirname,'html','product.html'))
});

router.post('/product/update', (req, res, next) => {
    console.log('In the middleware!',req.body);
    
    if(req.body.action=='delete'){
        for(let i=0;i<products.length;i++){
            if(products[i].productName==req.body.productName){
                products.splice(i,1);
                break;
            }
        }
    }else if(req.body.action=='edit'){
        for(let product of products){
            if(product.productName==req.body.productName){
                product.price=req.body.price;
                break;
            }
        }
    }
    else{
        products.push(req.body);
    }
    console.log(products)
    res.redirect('/product/list');
});

router.get('/list', (req, res, next) => {
    console.log(req.body);
   res.send(products)
});


module.exports = router;