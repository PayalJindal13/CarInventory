let CarData = require('../cars.js');
let carYear1 = require('../problem4.js');
let befCar = require('../problem5.js');
yearArray1 = new carYear1(CarData);
result = new befCar(CarData,yearArray1);
console.log(result.length);

