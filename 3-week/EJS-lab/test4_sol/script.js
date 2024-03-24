
var list = {
    Personal: {name:'Ram', alias: 'Lakshman', age: 32 },
    Preferences: [{ color: 'blue', theme: 'Azure' },
                { color: 'yellow', theme: 'Imagination' }]}


let res = list.Preferences.map(ele => {
    return ele.color;
})    

console.log(list.Preferences.map(ele => {
    return ele.theme
}));

console.log(res);