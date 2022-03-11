let CarData = require('../cars.js');
let carYear1 = require('../problem4.js');
let befCar = require('../problem5.js');
yearArray1 =  carYear1(CarData);
//Testcases
console.log(befCar(CarData,yearArray1)); // returns 25

console.log(befCar([]));                 // returns 0
console.log(befCar(undefined));         // returns 0
console.log(befCar(null));              // returns 0

console.log(befCar(null,null));         // returns 0
console.log(befCar(null,[]));           // returns 0
console.log(befCar(null,undefined));    // returns 0

console.log(befCar([],null));           // returns 0
console.log(befCar([],undefined));      // returns 0
console.log(befCar([],[]));             // returns 0

console.log(befCar(undefined,null));       // returns 0
console.log(befCar(undefined,[]));          // returns 0
console.log(befCar(undefined,undefined));      // returns 0

