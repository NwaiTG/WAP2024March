function convertObjtoArr(obj){
    let resArr = [];
    for(let attr in obj){
        let val = obj[attr];
        if(Array.isArray(val)){
            for(let i = 0; i < val.length; i++){
                resArr.push(attr+val[i]);
            }
        }
        else if(typeof val == 'object'){
            for(let ele in val){
                resArr.push(attr+ele+val[ele]);
            }
        }
        else{
            resArr.push(attr+val);
        }
    }
    return resArr;
}

function minifyObj(obj){
    let resArr = [];
    for(let i = 0; i < obj.length; i++){        
        let resObj = {};
        for(let attr in obj[i]){
            if(attr == "a"){
                resObj[attr] = obj[i][attr];
            }
        }
        resArr.push(resObj);
    }
    return resArr;
}

console.log(minifyObj([{a:1,b:2},{a:2,b:4}]));