// 4. Build the pattern below for given string
function buildOctagon(str) {
    let countlength = str.length * 3;
    for (let i = 0; i <= str.length - 1; i++) {
        let tempLine = "";
        for (let j = 0; j <= countlength - 1; j++) {
            if (j >= str.length - i) {
                tempLine += str.charAt(str.length - j - 1);
                break;
            } else {
                tempLine += " ";
            }
        }
        if(i == 0){
            for (let j = 0; j <= countlength - 1; j++) {
                tempLine += str.charAt(j) + " ";
            }
        }
        sum = str.length;
        console.log(tempLine + "\n");
    }
}

buildOctagon('Javascript')
buildOctagon('apple')

// function buildOctagon(a){
//     let first = ""
//     for (let i = 0; i<a.length; i++)
//         first += " "
//     first += a
//     console.log(first)
    
//     for (let i =1; i<a.length; ++i){
//         let tmp = ""
//         for(let j=0; j<(a.length-i); ++j)
//             tmp += " "
//         tmp += a[i]
//         for(let j=0; j<(a.length+2*i-2); ++j)
//             tmp += " "
//         tmp += a[a.length-1-i]
//         console.log(tmp)
//     }
// }

// buildOctagon('Javascript')
// buildOctagon('apple')