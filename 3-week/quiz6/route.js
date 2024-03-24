const express = require('express');
const route = express.Router();
const path = require('path');

route.get('/' , (req, res, next) => {
    // res.render('index', {a:4});
    res.cookie('users',[]);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
})

route.get('/chat/:user', (req, res, next) => {
    let userSelected = req.params.user;
    let messages = req.cookies.messages;
    console.log(userSelected, messages);
    if(messages){
        let newMessages = [];
       let notMine = messages.filter((ele) => ele.user !== userSelected);
       return res.send(notMine);
    }
    return res.send('Oops, no messages.')
})

route.post('/chat', (req, res, next) => {
    let userName = req.body.userName;
    let users = req.cookies.users;
    if(!users || !users.includes(userName)){
        users.push(userName);
        res.cookie('users' , users);
    }
    messages = req.cookies.messages ? req.cookies.messages : [];
    res.cookie('user' , userName);
    res.cookie('messages', messages);
    res.render('chat', {user:userName, users: users, messages: messages});
})

route.post('/addMessage' , (req, res, next) => {
    let msgs = req.cookies.messages;
    let curUser = req.cookies.user;
    let newMsgs = req.body.newMsgs;

    msgs = [...msgs, {user:curUser, msg: newMsgs, time: new Date().getTime()}];

    res.cookie('messages', msgs);
    res.send(msgs);
})


module.exports = route;