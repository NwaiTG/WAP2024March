const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
  }
  
  const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
  }

  let a = [1,2,3]
  let b = [4,5,6]
  let comb = [...a,...b]
  
  const myUpdatedVehicle = [{...myVehicle, ...updateMyVehicle}]

  console.log(myUpdatedVehicle);
  console.log(comb)


// let sea1 = {
//     deposit:"sodium chloride",
//     tides:function(){
//         console.log(this)
//     }    
// }
// let fn = sea1.tides;
// fn();


// function kathak(){
//     let jaipur = {
//         origin:true,
//         expression: function (){
//             console.log(this);
//         }
//     }
//     let innerFn = jaipur.expression();
//     // innerFn();
// }
// kathak();
// () => function(){
//     console.log("arrow", this)
// }
// let sea = {
//     deposit:"sodium chloride",
//     tides:function(){
//         console.log(this.deposit);
//         let moonCycles= () => 
//         this.deposit="magnesium";
//         moonCycles();
//         console.log(this.deposit);
//         function inner(){
//             console.log("inner", this.deposit);
//         }
//         inner();
//     },
//     arrowFunction: () => {
//         console.log(this.deposit); // "undefined"
//     }
// }
// sea.tides();
// sea.arrowFunction();

// let obj1 = {
//     name: "Alice",
//     regularMethod: function() {
//         console.log(this.name); // "Alice"
//         let innArr = () => {
//             console.log("innerArr", this.name); // "Alice"
//         }
//         innArr();
//     },
//     arrowFunction: () => {
//         console.log(this.name); // "Alice"
//     }
// };

// obj1.arrowFunction();


// let gameOfChance = {
//     dice:2,
//     spinningTops: false,
//     playerOne: function(){
//         let gameOfSkill ={
//             a:"n",
//             playerTwo:function(){
//                 console.log(this);
//             }
//         }
//         gameOfSkill.playerTwo();
//     }
// }
// gameOfChance.playerOne();

// obj1.regularMethod(); // "Alice"
// obj1.arrowFunction(); // "Alice"



// let obj = {
//     name: "John",
//     regularMethod: function() {
//         console.log(this.name); // "John"
//     },
//     arrowFunction: () => {
//         console.log(this); // undefined (or the global "name" value, if it exists)
//     },
//     setFrench:(newname => console.log("arrow", this))
// };

// obj.regularMethod(); // "John"
// obj.arrowFunction(); // undefined
// obj.setFrench();


// let myObj = {
//     a:1, fn:function(){
//         console.log("object",this);
//         function inner(){
//             console.log("inner global", this)
//         };
//         let f = ()=>{console.log("f",this)};
//         f();
//         // inner();
//     }, setFrench:(newname => console.log("arrow", this))
// }

// myObj.fn();
// myObj.setFrench();

// //Outside a function
// console.log(this);

// //assign this to property
// var a ={b:this}
// console.log(a.b);

// //.Inside a method, and invoked with the object this -> object before dot. 
// let obj1 = {a:1, b:function(){console.log(this)}}; 
// obj1.b(); 

// //Inside a method, and not invoked with the object this -> same as 1. 
// let obj = {a:1, b:function(){console.log(this)}}; 
// let newFun = obj.b; 
// newFun(); 

// //Arrow functions/methods -> this 
// let arrow = ()=>console.log("Inside arrow ",this) 
// arrow(); 

// let objArrow = {a:1, b:()=>console.log("Inside Object arrow ",this)} 
// objArrow.b(); 
//Inner function inside a method wont get access to object
//arrow function -> same as outer method 
// let innerFun = { 
//     b: 1, c: 2, d: function () { 
//         let arrow = () => console.log("Inside inner arrow", this) 
//         let innerFn = function () { 
//             // console.log("Inside inner Function", this) 
//         } 
//         arrow(); 
//         innerFn(); 
//     } 
// } 

// innerFun.d(); 