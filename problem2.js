

module.exports = function lastCarMM(inventory){
    if (inventory && inventory.length){
        let lastIndex=inventory.length-1;
        return `Last car is a ${inventory[lastIndex].car_make} ${inventory[lastIndex].car_model}`;
        }
        return '';
}