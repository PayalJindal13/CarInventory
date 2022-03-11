

module.exports = function carYears(inventory){
    if(inventory){
        let Years = [];
        for (let index =0; index< inventory.length; index++){
            Years.push(inventory[index].car_year)
        }
        return Years;
    }
    return [];
}