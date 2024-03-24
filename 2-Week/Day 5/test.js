const a = {
    name: "",
    log: function() {
    this.name = "Hello";    
    console.log(this.name); //Hello
    var setFrench = function(newname){
        this.name = newname;
    }
    // const setFrench = (newname => this.name = newname);
    setFrench("Bonjour");
    console.log(this.name); //Bonjour
    }
   };
   a.log()


// console.log(this);
// function foo() { "1",console.log(this); }
// const bob = {a:"hello",
//  log: function() {
//  console.log(2,this);
//  }
// };
// console.log(3,bob.log());


// function greet(greeting) {
//     console.log(greeting + ' ' + this);
// }

// let person = {
//     name: 'Alice'
// };

// let boundGreet = greet.bind("b", 'Hello');
// boundGreet(); // Output: Hello Alice

// function print(){
//     console.log(this);
// }
// console.log(print.bind("a"));
// let newFunc = print.bind("a");
// newFunc();
// console.log(print());



// let obj = {
//     value: 42,
//     getValue: function() {
//         return this.value;
//     },
//     getArrowValue: () => {
//         return this.value;
//     }
// };

// let globalValue = 100;

// console.log(obj.getValue());        // Output: 42 (this refers to obj)
// console.log(obj.getArrowValue());   // Output: 100 (this refers to global scope)

// // Using arrow function in a different context
// let getValueArrow = obj.getValue;
// let getArrowValueArrow = obj.getArrowValue;

// // console.log(getValueArrow());       // Output: undefined or error (depends on strict mode) as this is undefined in the function context
// // console.log(getArrowValueArrow());  // Output: 100 (this still refers to the global scope)
