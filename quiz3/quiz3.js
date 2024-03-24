
// console.log(findTriplet([1,2,3,4,5,9],9));// [ [ 1, 3, 5 ], [ 2, 3, 4 ] ]
// Sum of 1+3+5 = 9, Sum of 2_3+4 = 9
function findTriplet(arr, num){
    let resArr = [];
    for(let i = 0; i < arr.length; i++){
        let sum = arr[i];
        for(let j = i+1; i < arr.length; j++){
            sum = sum + arr[j];
            if(sum == num)
                resArr.push([i,j]);
            // for(let k = j + 1; k < arr.length; k++){
            //     if(arr[i] + arr[j] + arr[k] === num){
            //         console.log(i, j, k);
            //         resArr.push([i, j, k]);
            //     }
            // }
        }
    }
    return resArr;
}

// console.log(findTriplet([1,2,3,4,5,9],9));// [ [ 1, 3, 5 ], [ 2, 3, 4 ] ]

function missingInteger(arr){
    let max = arr[0];
    let resArr = [];
    for(let i = 0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }

    for(let i = 0; i < max; i++){
        let isFound = false;
        for(let j = 0; j < arr.length; j++){
            if(parseInt[i] == parseInt(arr[i])){
                isFound = true;
            }
        }

        if(isFound == false)
            resArr.push(i);
    }
    return resArr;
}

console.log(missingInteger([13, 11, 9]));

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi",'pear'];
// console.log(copyWithin(fruits,1,2,4)); // ['Banana','Apple','Mango','Mango','kiwi','pear']

function copyWithin(arr, startIndex, copyIndex, endIndex){
    let copyEle = arr.slice(copyIndex, endIndex);
    arr.splice(startIndex, copyEle.length, copyEle);
    console.log(arr);
}

let array = [
{ product: 'car', category: 'toys', rating: 8 },
{ product: 'legos', category: 'toys', rating: 9 },
{ product: 'iphone', category: 'Mobile', rating: 10 },
{ product: 'samsung', category: 'Mobile', rating: 6 },
{ product: 'sofa', category: 'furniture', rating: 10 }];

let array2 = [
{ product: 'Gardening Tools', category: 'tools', rating:8 },
{ product: 'Power tools', category: 'tools', rating: 10 },
{ product: 'sofa', category: 'Furniture', rating: 8 },
{ product: 'Tables', category: 'Furniture', rating: 7 },
{ product: 'stools', category: 'Furniture', rating: 7 }
]

function highestRatedCategory(objArr){
    let highRate = objArr[0]["rating"];    
    let cat = objArr[0]["category"];
    for(let i = 1; i < objArr.length; i++){
        for(let attr in objArr[i]){
            if(attr == "rating" && highRate < objArr[i][attr]){
                highRate = objArr[i][attr];
                cat = objArr[i]["category"];
            }
        }
    }
    return cat;
}

// console.log(highestRatedCategory(array)); //furniture
// console.log(highestRatedCategory(array2)); //tools


function listAllCategories(objArr){
    let resArr = [];
    let attrVal = "";
    for(let i = 0; i < objArr.length; i++){
        let isFound = false;
        for(let attr in objArr[i]){
            if(attr == 'category'){
                attrVal = objArr[i][attr];
            }
        }

        for(let j = i + 1; j < objArr.length; j++){
            for(let attrs in objArr[i]){
                if(attrs == 'category' && attrVal == objArr[j][attrs]){
                    isFound = true;
                }
            }
        }

        if(isFound == false){
            resArr.push(attrVal);
        }
    }
    return resArr;
}

// console.log(listAllCategories(array));//[ 'toys', 'Mobile','furniture' ]
// console.log(listAllCategories(array2));//[ 'tools', 'Furniture' ]

