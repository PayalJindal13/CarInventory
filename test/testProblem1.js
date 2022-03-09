let CarData = require('../cars.js');
let carDat = require('../problem1.js');
car33 = carDat(CarData);
if ( typeof(car33) !== String){
console.log(`Car is a ${car33.car_year} ${car33.car_make} ${car33.car_model}`);
}
else{
    console.log(car33);
}