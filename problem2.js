

module.exports = function lastCarMM(inventory){
    if(inventory === undefined){
        return "Undefined array";
    }
    else if (inventory.length === 0){
        return "Empty array";
    }
    else{
        let lastIndex=inventory.length-1;
        return [inventory[lastIndex].car_make,inventory[lastIndex].car_model]
        }
}