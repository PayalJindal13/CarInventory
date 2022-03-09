

module.exports = function carYears(inventory){
    if(inventory === undefined){
        return "Undefined array";
    }
    else if (inventory.length === 0){
        return "Empty array";
    }
    else {
        let Years = [];
        for (index =0; index< inventory.length; index++){
            Years.push(inventory[index].car_year)
        }
        return Years;
    }
}