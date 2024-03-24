const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject)=>{
    setTimeout(resolve,100,'foo');
});

Promise.all()

