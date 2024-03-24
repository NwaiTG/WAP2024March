let array = [
    { product: 'car', category: 'toys', rating: 8 },
    { product: 'legos', category: 'toys', rating: 9 },
    { product: 'iphone', category: 'Mobile', rating: 10 },
    { product: 'samsung', category: 'Mobile', rating: 6 },
    { product: 'sofa', category: 'furniture', rating: 10 }
];
let array2 = [
    { product: 'Gardening Tools', category: 'tools', rating:8 },
    { product: 'Power tools', category: 'tools', rating: 10 },
    { product: 'sofa', category: 'Furniture', rating: 8 },
    { product: 'Tables', category: 'Furniture', rating: 7 },
    { product: 'stools', category: 'Furniture', rating: 7 }
]

function listAllCategories(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        let val = arr[i].category;
        if(res.indexOf(val) == -1){
            res.push(val);
        }
    }
    return res;
}
console.log("Answer 1 a:");
console.log(listAllCategories(array));//[ 'toys', 'Mobile','furniture' ]
console.log(listAllCategories(array2));//[ 'tools', 'Furniture' ]


function highestRatedCategory(arr){
    let resSum = {};
    let resCount = {};
    let resAvg = {};
    for(let i = 0; i < arr.length; i++){
        cat = arr[i].category;
        if(resSum[cat]){
            resSum[cat] += arr[i].rating;
            resCount[cat]++;
        }else{
            resSum[cat] = arr[i].rating;
            resCount[cat] = 1;
        }
    }

    for(let elem in resSum){
        resAvg[elem] = resSum[elem]/ resCount[elem];
        
    }

    max = 0;
    maxCat = "";
    for(let elem in resAvg){
        if(resAvg[elem] > max){
            max = resAvg[elem];
            maxCat = elem;
        }
    }
    return maxCat;


}


// function highestRatedCategory2(arr){
//     let res = {};
//     let maxRating = arr[0].rating;
//     let maxCategory = "";
//     for(let i = 0; i < arr.length; i++){
//         let val = arr[i].category;
//         let rate = arr[i].rating;
//         if(rate > maxRating){
//             maxRating = rate;
//             maxCategory = val;
//         }
//     }
//     return maxCategory;
// }

console.log("Answer 1 b:");
console.log(highestRatedCategory(array)); //furniture
console.log(highestRatedCategory(array2)); //tools


// console.log(highestRatedCategory2(array)); //furniture
// console.log(highestRatedCategory2(array2)); //tools

/////////////////////////////////////////////////////////////////


const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi",'pear'];


function copyWithin(arr, copyTo, fromInd, toInd = arr.length){
    let res = [...arr];
    let diff = toInd - fromInd;
    for(let i = copyTo; i < copyTo + diff; i++){
        res[i] = arr[fromInd];
        fromInd++;
    }
    return res;
}

console.log("Answer 2:");
// Copy to index 2, all elements from index 0:
console.log(copyWithin(fruits,2,0));// [ 'Banana', 'Orange', 'Banana','Orange', 'Apple', 'Mango' ]
// Copy to index 2, elements from index 0-2:
console.log(copyWithin(fruits,2,0,2)); // ['Banana','Orange','Banana','Orange','kiwi','pear']
// Copy to index 1, elements from index 2-4:
console.log(copyWithin(fruits,1,2,4)); // ['Banana','Apple','Mango','Mango','kiwi','pear']


/////////////////////////////////////////////////////////////////


function missingInteger(arr){
    let res = [];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    for(let j = 1; j < max; j++){
        if(arr.indexOf(j) == -1){
            res.push(j);
        }
    }
    return res;
}


console.log("Answer 3:");
console.log(missingInteger([13, 11, 9]));//[1, 2, 3, 4, 5, 6, 7, 8, 10, 12 ]
console.log(missingInteger([3, 6, 4, 9]));//[ 1, 2, 5, 7, 8 ]


/////////////////////////////////////////////////////////////////

// Find triplets in the array whose sum is equal to given sum

function findTriplet(arr, sum){
    let res = [];
    for(let i = 0; i < arr.length - 2; i++){
        for(let j = i + 1; j < arr.length - 1; j++){
            for(let k = j + 1; k < arr.length -0; k++){
                if(arr[i] + arr[j] + arr[k] === sum){
                    res.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }
    return res;
}

console.log("Answer 4:");
console.log(findTriplet([1,2,3,4,5,9],9)); // [ [ 1, 3, 5 ], [ 2, 3, 4 ] ]
// // Sum of 1+3+5 = 9, Sum of 2_3+4 = 9
console.log(findTriplet([1,2,3,4,5,9],10));// [ [ 1, 4, 5 ], [ 2, 3, 5 ] ]
console.log(findTriplet([1,5,7,2,8,9,3,4],10));// [ [ 1, 5, 4 ], [ 1, 7, 2 ], [ 5, 2,3 ] ]
console.log(findTriplet([1,5,7,2,8,9,3,4],12));// [ [ 1, 7, 4 ], [ 1, 2, 9 ], [ 1, 8, 3 ], [ 5, 3, 4 ], [ 7, 2, 3 ] ]


