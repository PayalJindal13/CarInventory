

module.exports = function carYears(inventory){
    let Years = [];
    for (index =0; index< inventory.length; index++){
      Years.push(inventory[index].car_year)
    }
    return Years;
}