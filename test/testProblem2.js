let CarData = require('../cars.js');
let lastCar = require('../problem2.js');
//Testcases
console.log(lastCar(CarData)); // returns Last car is a Lincoln Town Car
console.log(lastCar());         // returns empty string
console.log(lastCar([]));         // returns empty string
console.log(lastCar(null));         // returns empty string
console.log(lastCar(undefined));         // returns empty string