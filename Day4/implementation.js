Array.prototype.ownSplice = function(startIndex, delCount){
    let removeEle = this.slice(startIndex, delCount + 1);
    let firstEle = this.slice(0, startIndex);

    for(let i = arguments.length -2; i < arguments.length; i++){
        firstEle.push(arguments[i]);
    }

    let leftEle = this.slice(startIndex + delCount, this.length);
    firstEle = firstEle.concat(leftEle);
    this.length = 0;
    this.concat(firstEle);    
    // for(let i = 0; i < firstEle.length; i++){
    //     this.push(firstEle[i]);
    // }
    return removeEle;
}

// Example usage
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

// // At position 2, add 2 elements: 
// console.log(fruits.splice(0, 3, "Lemon", "Kiwi"));
// console.log(fruits2.splice(0, 3, "Lemon", "Kiwi"));
// console.log(fruits);
// console.log(fruits2);


String.prototype.ownIndexOf = function(search){
    for(let i = 0; i < this.length; i++){
        let isFound = true;
        for(let j = 0; j < search.length; j++){
            if(this[i+j] !== search[j]){
                isFound = false;
                break;
            }
        }
        if(isFound)
            return i;
    }
    return -1;
}


String.prototype.ownLastIndexOf = function(search){
    for(let i = this.length; i >= 0; i--){
        let isFound = true;
        for(let j = 0; j < search.length; j++){
            if(this[i+j] !== search[j]){
                isFound = false;
                break;
            }
        }
        if(isFound)
            return i;
    }
    return -1;
}

String.prototype.gptLastIndexOf = function(searchValue) {
    for (let i = this.length - searchValue.length; i >= 0; i--) {
        let found = true;
        for (let j = 0; j < searchValue.length; j++) {
            console.log(i,i+j,j,this[i + j], searchValue[j]);
            if (this[i + j] !== searchValue[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }
    return -1;
};

// let orgStr = "This is my world and world blah blah";
// console.log(orgStr.ownIndexOf("worlds"));
// console.log(orgStr.indexOf("worlds"));


// String.prototype.ownIndexOf = function(searchValue){
//     let isSame = 0; let firstIndex = -1;
//     for(let i = 0; i < this.length; i++){
//         if(this[i] == searchValue[0]){
//             firstIndex = i;
//             for(let j = 1; j < searchValue.length; j++){
//                 i++;
//                 if(this[i] !== searchValue[j]){
//                     firstIndex = -1;
//                     isSame = 0;
//                     break;
//                 }

//                 isSame = 1;                  
//             }

//             if(isSame == 1 && firstIndex != -1){
//                 return firstIndex;
//             }
//         }
//     }
//     return -1;
// }

// let orgStr = "This is my world and world blah blah";
// console.log(orgStr.ownIndexOf("worlds"));
// console.log(orgStr.indexOf("worlds"));

String.prototype.ownSubstring = function(startIndex, endIndex){
    let resStr = '';
    if(endIndex == null){
        endIndex = this.length;
    }
        
    for(let i = startIndex; i < endIndex; i++){
        resStr = resStr + this[i];
    }

    return resStr
}

// let orgStr = "This is my world";
// console.log(orgStr.ownSubstring(1, 7));
// console.log(orgStr.substring(1, 7));

let list = [{flower:'Rose',color:'red',count:2},{flower:'Jinnia',color:'pink', count:3},
{flower:'Hibiscus',color:'pink',count:4}]

const c = list.reduce(function(accumulator, currentValue, initial){
    return accumulator + currentValue.count;
},0);
// console.log(c);

const p = list.filter(value => value.color === 'pink');
// console.log(p);

function printAllPinkFlowers () {
    return list.filter((a) => a.color === 'pink');
}
// console.log(printAllPinkFlowers(list));//[ 'Jinnia', 'Hibiscus' ]