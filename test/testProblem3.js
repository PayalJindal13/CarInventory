let CarData = require('../cars.js');
let carModel = require('../problem3.js');
//Testcases
console.log(carModel(CarData)); // returns car models sorted 
console.log(carModel());        // returns empty array
console.log(carModel(null));        // returns empty array
console.log(carModel(undefined));        // returns empty array
console.log(carModel([]));        // returns empty array

