//// 11.
// let magic = {trick: 'levitation', print:function(){
//     if(Array.isArray(this)){
//         return this[0]
//     }else{
//         return this;
//     }
// }}

// let test = "asdf"
// let trick = ['penetration'];
// console.log(magic.print.call(magic));
// console.log(magic.print.call(trick));
// console.log(magic.print.call([test]));
// console.log(magic.print.apply([test, test]));
// console.log(magic.print.call(trick));

// // 10.
// let myArray = [{fruit:'apple'},{flower:'rose'}]
// let [{fruit}] = myArray;
// console.log(fruit);

// 9.
// let obj = {a:1,b:2, add:() =>{
//     return this.a + this.b;
// }}
// console.log(obj.add());

//// 8.
// let a = 5;
// function add(){
//     a++;
// }
// add();
// console.log(a);

// 7. because of local variable
// function set(){
//     var flag = true;
//     function unset(flag){
//         // flag = flag;
//         flag = false;
//     }
//     // unset(false);
//     unset()
//     return flag;
// }
// console.log(set());

// // 6. because of local variable
// let myOjb2 = {x:1}
// function update(x){
//     x = 4;
//     let y = {a:5};
//     y = 7;
//     console.log(y);
// }
// update(myOjb2);
// console.log(myOjb2);

// // 5.
// let myobj = {a:1,b:2,multiply:function(){
//     return this.a*this.b;
// }}
// let fn = myobj.multiply;
// console.log(fn());

// // 4.
// let moves = {na:'a', b:'b'}
// function print(){
//     console.log(this);
// }
// console.log(print.bind("a"));
// let newFunc = print.bind(null);
// newFunc();

// 3.
// function print(){
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(print(5,6,7,10));
// console.log(print(5,6));

// // 2.
// let steps = ['tatkaar', 'hastak'];
// let sequences = [1,2];
// let obj1 = {a:1};
// let combine = ['Array',...sequences,obj1,...steps];
// console.log("'Array',[1,2,{a:1}, 'tatkaar', 'hastak']", combine);

//// 1.
// // myfn();
// let myfn = function(){
//     console.log("here");
// }
// // myfn();