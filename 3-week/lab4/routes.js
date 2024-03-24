const express = require('express');
const path = require('path');
const { nextTick } = require('process');

const option = {
    caseSensetive: false,
    strict: true
}

const router = express.Router(option);

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'html', 'login.html'));
})

let userdict = [
    {user:'user1', type:'guest'},
    {user:'user2', type:'owner'},
    {user:'user3', type:'guest'},
    {user:'admin', type:'owner'}
]
let currentUser;

let myArray = {guest:['Nuts',"Legumes"], owner:['Vegetables','Nuts','Fruits',"Legumes"]}

function userAuth(user, category){
    for(let i = 0; i < userdict.length; i++){
        if(userdict[i].user==user){
            console.log(userdict[i].type)
            if(userdict[i].type=='owner'){
                if(myArray.owner.indexOf(category) != -1) return 1;
            } else if(userdict[i].type=='guest'){
                if(myArray.guest.indexOf(category) != -1) return 1;
            }
        }
    }
    return 0;
}

function userType(user){
    for(let i = 0; i < userdict.length; i++){
        if(userdict[i].user==user){
            if(userdict[i].type=='owner'){
                return 1;
            } else if(userdict[i].type=='guest'){
                return 0;
            }
        }
    }
    return -1;
}

router.post('/login', (req, res, next) => {
    const username = req.body.username;
    currentUser = username;

    if(userType(username) != -1)
        res.sendFile(path.join(__dirname, 'html', 'view.html'));
    else
        res.send('<p>Error: Invalid username or password!</p>');
})

// router.post('/view', (req, res, next) => {
    
//     const category = req.body.category;
//     console.log(currentUser, category);
//     console.log(userAuth(currentUser, category));

//     if(userAuth(currentUser, category) != 0)
//         res.send(`<p>welcome to ${category}</p>`);
//     else
//         res.send('<p>Unauthorized!</p>');
// })

router.post('/view', 
    (req, res, next) => {
        const category = req.body.category;
        if(userAuth(currentUser, category) == 0)
            res.send('<p>Unauthorized!</p>');
        else
            next();
    },
    (req, res, next) => {
        const category = req.body.category;
        res.send(`<p>welcome to ${category}</p>`);
    }
)




router.use((req, res, next) => {
    res.status(404).send('<p>404 the page has not found!</p>')
})


module.exports = router;