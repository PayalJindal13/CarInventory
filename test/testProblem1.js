let CarData = require('../cars.js');
let carDat = require('../problem1.js');
console.log(carDat(CarData)); // expects output with a string with car details
console.log(carDat());         // expects output as {}
console.log(carDat(null));      // expects output as {}
console.log(carDat(undefined)); // expects output as {}
console.log(carDat({}));        // expects output as {}
