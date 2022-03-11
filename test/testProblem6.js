let CarData = require('../cars.js');
let bmwAudi = require('../problem6.js');

// Testcases
console.log(JSON.stringify(bmwAudi(CarData))); // returns car data for BMW and Audi
console.log(JSON.stringify(bmwAudi()));         // returns []
console.log(JSON.stringify(bmwAudi(null)));     // returns []
console.log(JSON.stringify(bmwAudi(undefined)));    // returns []
console.log(JSON.stringify(bmwAudi([])));           // returns []
