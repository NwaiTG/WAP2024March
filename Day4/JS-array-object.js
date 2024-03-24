/* 4. Transform Array to print the type of elements in the Array 
getTypes([50,”apple”,{a:1}]) => [“number”,”string”,”object”*/

// let arr = [50,"apple",{a:1}];
// let res = function getTypes(arr){
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         res.push(typeof arr[i]);
//     }
//     return res;
// }

/* 5. From the given array, build an object that has array elements as 
properties. The name of the property is
<typeof the element>+index */

// arr = [50,"apple",{a:1}];
// function destructureArray(arr){
//     let res = {};
//     for(let i = 0; i < arr.length; i++){
//         let attr = typeof arr[i];
//         attr = attr + i;
//         res[attr] = arr[i];
//     }

//     return res;
// }

/* 6. Find Index of first odd number - (using array method and also not 
using array methods)
*/

// let intArr = [2,4,6,1,5,8];
// function indexOfFirstOdd(intArr){
//     for(let i = 0; i < intArr.length; i++){
//         if(intArr[i]%2 == 1)
//             return i;
//     }
// }

/* 7. Convert string to array and array to string. don’t use split() and 
toString()
*/

// let pureStr = "thisisstring"
// function strToArr(pureStr){
//     let arrP = [];
//     let arrS = [];
//     for(let i = 0; i < pureStr.length; i++){
//         // arrP.push(pureStr[i]);
//         arrS.unshift(pureStr[i]);
//     }
//     return arrS;
// }

// let arrToStr = ['my', 'world'];
// function arrToStrFunc(arrToStr){
//     return arrToStr.join(";");
// }
// console.log(arrToStrFunc(arrToStr));

/* 8. Implement indexOf, lastIndexOf,split, substring without the built-in 
string functions */
// let arrIndexOf = ["Banana", "Orange", "Apple", "Apple", "Banana"];
// function ownIndexOf(arrIndexOf, search){
//     for(let i = 0; i < arrIndexOf.length; i++){
//         if(arrIndexOf[i] == search)
//             return i;
//     }
// }

// function ownIndelastIndexOfxOf(arrIndexOf, search){
//     for(let i = arrIndexOf.length - 1; i >= 0; i--){
//         if(arrIndexOf[i] == search)
//             return i;
//     }
// }

// let ownStr = "This is blah blah"
// // console.log(ownStr.substring(0, ));
// function test(ownStr){
//     let i = ownStr.indexOf(" ");
//     return ownStr.substring(i + 1,ownStr.length);
// }

// // console.log(test(ownStr));

// function ownSplit(ownStr, spDelimitor){
//     // return ownStr.split(" ");
//     let spArr = [];
//     if(spDelimitor == null)
//         return [ownStr];
//     else if(spDelimitor == ""){
//         for(let i = 0; i < ownStr.length; i++){
//             spArr.push(ownStr[i]);
//         }
//     }
//     else{
//         for(let i = 0; i < ownStr.length; i++){
//             if(spDelimitor == ownStr[i]){
//                 let index = ownStr.indexOf(spDelimitor);
//                 spArr.push(ownStr.substring(0, index));
//                 ownStr = ownStr.substring(index + 1, ownStr.length); //"This is blah blah"
//                 i = 0;
//             }
//         }
//         spArr.push(ownStr);
//     }
//     return spArr;
// }

// Array.prototype.ownPush = function(value){
//     let newArr = this;
//     newArr[this.length] = value;

//     return newArr;
// }

// Array.prototype.ownpop = function(){
//     let lastEle = this.splice(this.length-1,1);
//     console.log(this);
//     return lastEle;
// }

// function convertObjectToArray(obj){ 
//     let resArr = [];
//     for(let key in obj){
//         let val = obj[key];
//         if(Array.isArray(val)){
//             let temp = "";
//             for(let i = 0; i < val.length; i++){
//                 temp = temp + val[i];
//             }
//             resArr.push(key+temp);
//         }
//         else if(typeof val == 'object'){
//             let tep = "";
//             for(let k in val){
//                 resArr.push(key+k+val[k]);
//             }
//         }
//         else
//         {
//             resArr.push(key+obj[key]);
//         }
//     }
//     return resArr;
// }

function convertObjectToArray(obj){
    let resArr = [];
    for(let key in obj){
        let val = obj[key];
        // console.log(val);
        if(Array.isArray(val)){
            let temp = "";
            for(let i = 0; i < val.length; i++){
                temp = key + val;
            }
            resArr.push(temp);
        }
        else if(typeof val == 'object'){
            for(let ele in val){
                resArr.push(key+ele+val[ele]);
            }
        }
        else
            resArr.push(key+val);
    }

    return resArr;
}
let orgs = {a:1,b:[1,2],c:"string",d:{x:1,y:2}}; //[a1,b12,cstring,dx1,dy2]
console.log(convertObjectToArray(orgs));

/*
2. Minify Object
Get objects that has properties of name, ‘a’
[{a:1,b:2},{a:2,b:4]=> [{a:1},{a:2}]
*/

function minifyObj(org, prop){
    let resArr = [];
    for(let i = 0; i < org.length; i++){
        if(typeof org[i] == 'object'){
            // for(let key in org[i]){
                if(org[i].hasOwnProperty(prop)){
                     let obj1 = {};
                    obj1[prop] = org[i][prop];
                    resArr.push(obj1);
                }
            // }
        }
    }
    return resArr;
}

function findObjectWithProp(array, prop) {
    let objArray = [];
    for (let ele of array) {
        console.log(ele, ele[prop]);
        if (ele.hasOwnProperty(prop)) {
            let temp = {};
            temp[prop] = ele[prop];
            objArray.push(temp)
        }
    }
    return objArray;
}

let org = [{a:1,b:2},{a:2,b:4}];
console.log(minifyObj(org, 'a'));

/* 3. 
Get the Oldest person age 
findOldestPerson[{name:’Ram’,age:20}, 
{name:’Lakshman’,age:15}]=>Ram
*/

// function getOldestPersonAge(orgArr){
//     let maxAge = orgArr[0].age;
//     for(let i = 0; i < orgArr.length; i++){        
//         if(typeof orgArr[i] == 'object'){
//             if(maxAge < orgArr[i].age)
//                 maxAge = orgArr[i].age;
//         }
//     }
//     return maxAge;       
// }

// let orgArr = [{name:"Ram",age:20},{name:"Lakshman",age:15}]
// console.log(getOldestPersonAge(orgArr));

/* 4. 
Get the Youngest person name
findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=>15

Note: Same as No. 3
*/

/* 5.
Find the person whose age is between 16 and 17 years.
findYounger[{name:’Ram’,age:20},{name:’Lakshman’,age:15}]=> 
{name:’Lakshman’,age:15}
*/


// let pushArr = ["hello", "world"];

// console.log(pushArr.ownPush("New Word"));

// Test the custom split method
// let str = 'Hello,World, From,ChatGPT';
// console.log(str.mySplit(' ')); // Output: ["Hello", "World", "From

// console.log(ownSplit(ownStr, " "));
