/* Write a function, scoreExams, that takes an array of arrays of student answers and an array of 
the correct answers. It should compare each student’s answers against the correct answers and 
return an array holding the scores of each student. The score for each student is a count of the 
number of correct answers (i.e., matches with the key of correct answers). For example 
const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]]; 
const correctAnswers = [3, 1, 2,4]; 
scoreExams(studentAnswers, correctAnswers)); --> [3,2,3];*/

const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];   //--> [3,2,3];
const correctAnswers = [3, 1, 2,4]; 
let res = function scoreExams(studentAnswers, correctAnswers){
    let res = [];
    for(let j = 0; j < studentAnswers.length; j++){
        let count = 0;
        let sAns = studentAnswers[j];
        for(let i = 0; i < sAns.length; i++){
            if(sAns[i] == correctAnswers[i])
                count++;
        }
        res.push(count);
    }

    return res;
}

// console.log(res(studentAnswers, correctAnswers));

/* Write a function, scoreForecasts, that takes 2 parameters which are each arrays. The 
first is an array of temperature forecasts. The second is an array of observed 
temperatures. If the forecast temperature is within 2 degrees of the actual that is 100% 
accurate. If the forecast is within 5 degrees that is 80% accurate. If it is within 10 
degrees that is 60% accurate. If the forecast is outside 10 degrees that is a miss or 0% 
accurate. scoreForecasts should find the percent accuracy for each forecast and return 
the average accuracy for a set of forecast temperatures. */

const forecast1 = [80, 90, 85]; 
const observed1 = [82, 95, 70]; 
const forecast2 = [80, 80, 80]; 
const observed2 = [82, 85, 74]; 
let ans = function scoreForecasts(forecast1, observed1){
    let res = 0;
    for(let i = 0; i < forecast1.length; i++){
        let sub = Math.abs(forecast1[i] - observed1[i]);
        if(sub <= 2)
            res = res + 100;
        else if(sub <= 5)
            res = res + 80;
        else if(sub <= 10)
            res = res + 60;
        else
            res = res + 0;
    }

    return Math.round(res/observed1.length)
}

// console.log(ans(forecast2, observed2));

/* Write a function, firstRowColSum, to determine the sum of first row and first column of 
a 2-dimensional array and return an array of first row sum and first column sum */

testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ];
testArr2 = [ [1, 2], [3, 4], [5, 6]];
function firstRowColSum (testArr1){
    let rSum = 0;
    let cSum = 0;
    let res = [];
    for(let i = 0; i < testArr1.length; i++){
        let arr = testArr1[i];
        for(let j = 0; j < arr.length; j++){
            if(j == 0)
                cSum = cSum + arr[j];

            if(i == 0)
                rSum = rSum + arr[j];
        }
    }

    res.push(rSum);
    res.push(cSum);
    return res;
}

console.log("expect : [6,15] ", firstRowColSum(testArr1));
console.log("expect : [3,9] ", firstRowColSum(testArr2));

