

module.exports = function lastCarMM(inventory){
    let lastIndex=inventory.length-1;
    return [inventory[lastIndex].car_make,inventory[lastIndex].car_model]
        }
