let tataTiago = {name:"Tata Tiago",manufacturer:"Tata",fuelType:"petrol",bodyType:"hatchback", seatingCapacity:5,price:5000} 
let nexon = {name:"Tata Nexon",manufacturer:"Tata",fuelType:"diesel",bodyType:"SUV", seatingCapacity:5,price:7000}; 
let mahindra = {name:"Mahindra XUV700",manufacturer:"Mahindra",fuelType:"petrol", bodyType:"SUV", seatingCapacity:5,price:7500}; 
let mg = {name:"MG ZS EV",manufacturer:"Mahindra",fuelType:"Electric",bodyType:"SUV", seatingCapacity:5,price:25000}; 
let volvo ={name:"Volvo XC90",manufacturer:"Volvo",fuelType:"petrol",bodyType:"hybrid", seatingCapacity:7,price:35000};
let list = [tataTiago,nexon,mahindra,mg,volvo];

// a. Get Petrol Cars below given pric
function getPetrolCarsWithinPrice(list,price){
    return list.filter(currentVal => currentVal.price < price);
}

// console.log(getPetrolCarsWithinPrice(list,15000));

// b. Return the number of cars by each Manufacture
function groupByManufacturer(list){
    
}

// c. sortThemByGivenFilter(list,"bodyType")
function sortByAttr(orgArr, attr){
    return orgArr.sort(a => a[attr]);
}

console.log(sortByAttr(list,"fuelType"));


