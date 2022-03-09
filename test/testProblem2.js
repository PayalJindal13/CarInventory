let CarData = require('../cars.js');
let lastCar = require('../problem2.js');
carMM = lastCar(CarData);
if ( typeof(carMM) !== String){
    console.log(`Last car is a ${carMM[0]} ${carMM[1]}`);
}
else{
    console.log(carMM);
}