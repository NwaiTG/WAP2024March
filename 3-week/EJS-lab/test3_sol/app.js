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


let products = [{img: 'https://m.media-amazon.com/images/I/71SKXw+9tCL._AC_SX679_.jpg',name: 'Winter Hanging Decor', price: '42'},
    {img: 'https://m.media-amazon.com/images/I/81Kng7krTwL._AC_SX679_.jpg',name: 'Fall Hanging Decor', price: '50'}];

app.get('/', (req,res,next)=>{
    console.log("Landing.......");
    res.cookie("prods", []);
    res.cookie('tot_price',0);

    // Check if the request is a refresh
    // if (req.headers['cache-control'] === 'max-age=0') {
    //     res.clearCookie("prods");
    //     res.clearCookie("tot_price");
    // }

    res.render('index', {products:products, selectedProds:"", tot_price:""});
})

app.post('/post', (req,res,next)=>{
    console.log("In the post....");
    let data = req.body;
    let prods = req.cookies.prods || []
    let price = 0;
    
    if(data.chk){
        let isFound = false;
        // for(let i = 0; i < prods.length; i++){
        //     if(prods[i].name === data.chk){
        //         prods[i].count += 1;
        //         isFound = true;
        //         break;
        //     }
        // }

        prods.map(prod => {
            if(prod.name === data.chk){
                prod.count += 1;
                isFound = true;
            }
        })

        if(!isFound){
            prods.push({name:data.chk, count:1});
        }

        price = products.find(product => product.name === data.chk).price;

        console.log(price);

        // for(let i = 0; i < products.length; i++){
        //     if(products[i].name === data.chk){
        //         price = parseInt(products[i].price);
        //         break;
        //     }
        // }
    }

    let totalprice = parseInt(req.cookies.tot_price) + parseInt(price);
    res.cookie("tot_price", totalprice);
    res.cookie("prods", prods);
    
    res.render('index', {products:products, selectedProds:prods, tot_price:totalprice});
})