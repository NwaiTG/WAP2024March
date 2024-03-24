
// this
let obj={
    a:1, fun:function(){
        console.log(this);
    }
};

let obj2 = {b:2};

obj2.a = obj.a;
obj2.fun = obj.fun;
obj2.fun();
let func = obj.fan;
func;


// let gameOfChance = {
//     dice:2,
//     spinningTops: false,
//     playerOne: function(){
//         let gameOfSkill ={
//             playerTwo:function(){
//                 console.log(this);
//             }
//         }
//         gameOfSkill.playerTwo();
//     }
// }
// gameOfChance.playerOne();

// function kathak(){
//     let jaipur = {
//         origin:true,
//         expression: function (){
//             console.log(this);
//         }
//     }
//     let innerFn = jaipur.expression;
//     innerFn();
// }
// kathak();

// let sea = {
//     deposit:"sodium chloride",
//     tides:function(){
//         console.log(this)
//     }    
// }
// let fn = sea.tides;
// fn();


// function river(){
//     function ribbon(){
//         console.log(this);
//     }
//     return {ribbon:ribbon}
// }
// function flow(){
//     river().ribbon();
// }
// flow();

// console.log("first", this);
// function foo() { console.log("s", this); }
// const bob = {
//  log: function() {
//  console.log("3", this);
//  }
// };

// function a(){
//     console.log("x", x);
// }
// function b(){
//     var x = 10;
//     a();
// }
// var x =20;
// b();

// function b(){
//     var x = 10;
//     function a(){
//         console.log("x,", x);
//     }
//     a();
// }
// var x = 20;
// b();

// function department(language){ 
//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments)
//     function software(){ 
//         let language = "javascript"; 
//         console.log(language);
//     } 
//     console.log(language) 
// } 
// department("java");

// Scope
// function department(){ 
//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments);
//     function software(){ 
//         let language = "javascript"; 
//         console.log("softfunc:",language)
//     } 
//     // console.log(language) 
// } 
// department() 

// function departments(language){ 
//     let numberOfDepartments = 5; 
//     console.log(numberOfDepartments)
//     function software(){ 
//         let language = "javascript"; 
//         console.log(language);
//     } 
//     console.log(language) 
//     software();
// } 
// let func = departments("java");
// // console.log(func()());

// function test(x){ 
//     x = 10; 
//     x++; 
//     return function(){ 
//         return x++; 
//     } 
// } 
// console.log(test(2)())  


// // Destructure
// //3.
// let swimming = ["ring","goggles"]
// let swimmingObj = {};
// [swimmingObj.ring, swimmingObj.goggles] = swimming;
// console.log("expect ring ",swimmingObj.ring);
// console.log("expect goggles ",swimmingObj.goggles)
// console.log(swimmingObj);

// let swimObj = {swimmingObj:"ring", swimmingObj:"googles"};
// let swim = [];
// [ring, googles] = swimObj;
// console.log(swimObj);
// console.log("expect ring ",ring);
// console.log("expect goggles ",goggles)

// // 4.
// let javelin = {distance:133};
// let {distance:myDistance} = javelin;
// console.log("expect 133 ",myDistance)

// let nestedObj = {nested:{inner:{i:"object"}, another: "Hello!"}}
// let {nested:{inner:{i}, another:a}} = nestedObj ;
// console.log("expect 'object' ",i) 
// console.log("expect Hello!",a);

// // 7. 
// let singleElementArray = [1];
// let [base,code] = singleElementArray;
// console.log("expect 1 ",base)
// console.log("expect undefined",code);

// // 8.
// let numberArray = [,,1,2];
// let [one=true,two="second",third="four",] = numberArray;
// console.log("expect true ",one) 
// console.log("expect second",two); 
// console.log("expect 1",third);

// // 10.
// let obj = {a:1, b: "hi",c:true, d:{inner:"object"}}
// let {d:innerValue, b:message} = obj;
// console.log("expect {inner:'object'} ",innerValue)
// console.log("expect hi",message);