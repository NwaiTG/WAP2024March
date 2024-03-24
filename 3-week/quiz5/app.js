const express = require('express');
const app = express();
const route = require('./route');

app.listen(82, () => {
    console.log("Server is running at port 81...")
})

//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route);

app.use((req, res, next) => {
    res.send(404);
})