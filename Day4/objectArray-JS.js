const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// console.log(characters.sort((a,b) => a.height - b.height));

function sortByAttr(orgArr, attr) {
    return orgArr.sort((a,b) => a[attr] - b[attr]);
}

// console.log(sortByAttr(characters, "name"));

// ========= Start filter() ========
// 1.Get characters with mass greater than 100
// const c = characters.filter(function(currentEle, i, array){
//     return currentEle.mass > 100;});//[1,5]

// const a = characters.filter(character => character.mass > 100);    

// // 2. Get characters with height less than 200  
// const greaterH = characters.filter(function(currentEle, i, array){
//     return currentEle.height < 200;
// }) 

// const gH = characters.filter(getHeight);

// function getHeight(item){
//     return item.height < 200;    
// }

// console.log(gH);

// // 3. Get all male characters
// const getAllMale = characters.filter((currentEle, i, array) => {
//     return currentEle.gender !== "female";
// })

// // 4. Get all female characters
// const getAllFemale = characters.filter((currentEle, i, array) => {
//     return currentEle.gender == "female";
// })

// // console.log(getAllFemale);

// // ========= End filter() ========

// // ========= Start reduce() ========

// // Get the total mass of all characters
// const ff = characters.reduce(function(accumulator, currentValue){
//     return accumulator + currentValue.mass;},0);

// const totM = characters.reduce(character => character.mass + accumulator);    
// console.log(totM);

// // 2.Get the total height of all characters    
// const hh = characters.reduce((accumulator, currentValue, initial) => {
//     return accumulator + currentValue.height;
// },0)

// // 3.Get the total number of characters in all the character names
// const cc = characters.reduce(function(accumulator, currentvalue, initial){
//     return accumulator + currentvalue.name.length;
// }, 0)

// // 4.Get the total number of characters by eye color (hint. a map of eye color to count)

// // console.log(cc);
// // ========= End reduce() ========



// // ========= Start map() ========

// // console.log(characters.map(testInnerFunc))


/*MAP
=========*/
// Get an array of all names
console.log("Name", characters.map(charcter => charcter.name));

// Get an array of all heights
console.log("Height", characters.map(character => character.height))

// Get an array of objects with just name and height properties
console.log("name, height", characters.map(item =>{
    return {name:item.name, height:item.height};}
));
// Get an array of all first names

// // ========= map() ========
// function getAllFirstName(item){
//     let arr = item.name.split(" ");
//     return arr[0];
// }

// function getAllName(item){
//     return item.name;
// }

// function testInnerFunc(item){
//     let obj = {
//         name: getAllFirstName(item),
//         height: item.height
//     }

//     return obj;
// }

// function getObjOfNameAndHeight(item){
//     let obj = {NewName: item.name, NewHeight: item.height};
//     // obj.
//     return obj;
// }

/* test reduce()
const num = [1, 2, 3, 4, 5];

// Sum of all numbers starting from the first element
const sumWithInitial = num.reduce((accumulator, currentValue, currentIndex) => {
    console.log(`Index: ${currentIndex}, Accumulator: ${accumulator}`);
    return accumulator + currentValue;
}, 0);

console.log("Sum with initial value:", sumWithInitial);

const numbers = [1, 2, 3, 4, 5];

// Sum of all numbers starting from the second element
const sumWithoutInitial = numbers.reduce((accumulator, currentValue, currentIndex) => {
    console.log(`Index: ${currentIndex}, Accumulator: ${accumulator}`);
    return accumulator + currentValue;
});

console.log("Sum without initial value:", sumWithoutInitial);
*/

