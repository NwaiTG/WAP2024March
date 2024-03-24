function max(a,b){
    if(a > b)
        return a;
    else if(a < b)
        return b;
}

function maxOfThree(a,b,c){
    let max = 0;
    if(a>b)
        max = a;
    if(max<c)
        max = c;

    return max;
}

function isVowel(a){
    if(a == 'a' || a == 'e' || a == 'i' || a == 'o' || a == 'u')
        return true;
    else
        return false;
}

function sum(a){
    let sum = 0;
    for(let i = 0; i < a.length; i++){
        sum = sum + a[i];
    }

    return sum;
}

function multiplies(a){
    let mul = 1;
    for(let i = 0; i < a.length; i++){
        mul = mul * a[i];
    }
    return mul;
}

function reverse(a){
    let res = "";
    for(let i = a.length - 1; i >= 0; i--){
        res = res + a[i];
    }
    return res;
}

function findLongestWord(a){
    let max = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i].length > max)
            max = a[i].length;
    }

    return max;
}

function filterLongWords(a, num){
    let resArr = [];
    for(let i = 0; i < a.length; i++){
        if(a[i].length > num)
            // resArr.unshift(a[i]); // add the element to the beginning of the array
            resArr.push(a[i]); // add the element to the end of the array. Note: generate sequencial order.
            // resArr.splice(-1,0,a[i]); // splice(startIndex, deleteCount, "New Value") Note: deleteCount 0 is no deleting.
    }
    return resArr;
}

function ownIndexOf(str, search){
    let isFound = 0;
    let firstIndex = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == search[0])
        {
            firstIndex = i;
            for(let j = 1; j < search.length; j++){
                i = i + 1;
                if(str[i] != search[j]){   
                    isFound = 0;  
                    break;   
                }   
                isFound = 1;          
            }
        }    
        if(isFound == 1){
            return firstIndex;
        }
    }
    return -1;
}

let orgStr = "This is my world and world";
console.log(ownIndexOf(orgStr, "worlds"));

function ownLastIndexOf(str, search){
    let isFound = 0;
    let firstIndex = 0;
    let nextIndex = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] == search[0])
        {
            if(firstIndex == 0)
                firstIndex = i;
            else
                nextIndex = i;

            for(let j = 1; j < search.length; j++){
                i = i + 1;
                if(str[i] != search[j]){     
                    break;   
                }   
                isFound = 1;          
            }
        }    
        if(isFound == 1){
            return firstIndex;
            break;
        }
    }
    return -1;
}

// Hello world, welcome to the universe.
let a = ["This", "is", "WAP", 'Course!'];
// console.log(ownLastIndexOf("Hello world, world welcome to the universe.", "world"));

function ownIncludes(str, search){
    let serLen = 0;
    let strArr = str.split(" ");

    for(let i = 0; i < strArr.length; i++){
        let temp = strArr[i];

        if(temp[0] == search[0]){
            
        }
        
    }


    for(let i = 0; i < str.length; i++){        
        if(str[i] == search[0] && search == 0){
            serLen = search.length - 1;
        }

        if(serLen > 0){}
    }
}

