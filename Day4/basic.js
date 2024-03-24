function mul(a,b,c){
    return a * b * c;
}

console.log(mul(2,2,2))

function su(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum = sum + a[i];
    }
    return sum;
}

let a = [1, 2, 3, 4];

console.log(su(a));