let CarData = require('../cars.js');
let carYear1 = require('../problem4.js');
let befCar = require('../problem5.js');
yearArray1 =  carYear1(CarData);
result = befCar(CarData,yearArray1);
if ( typeof(result) !== String && typeof(yearArray1) !== String){
result = befCar(CarData,yearArray1);
console.log(result.length);
}
else{
    console.log(result);
}
