const express = require('express');
const app = express();
var router = require('./routes')
app.listen(81, () => {
    console.log('Your Server is running on 81');
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/",router);
