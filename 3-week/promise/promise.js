
let x = 5;
let promise1 = new Promise(function(successCallback, rejectCallback){
    setTimeout(function(){
        console.log(" TIMEOUT ");
        if(x==5){
            rejectCallback(5);
        }else{
            successCallback(10);
        }
    }, 100)
});



console.log(promise1);
promise1.then(function(value){
    console.log("HeERE", y)
}).catch(function(error){
    console.log(" CATCH ");
})

console.log("After ");