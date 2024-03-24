const express = require('express');
const app = express();
var route = require('./route');
var ejs = require("ejs");
var cookieParser = require('cookie-parser');

app.listen(81, () => {
    console.log('Your Server is running on 81');
})

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(route);

app.use((req, res, next) => {
    res.send(404);
})