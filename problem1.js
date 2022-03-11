

module.exports = function carById(inventory){
    if(inventory){
        for (let index = 0; index < inventory.length; index++){
            if (inventory[index].id === 33) return `Car is a ${inventory[index].car_year} ${inventory[index].car_make} ${inventory[index].car_model}`;     
        }   
    }       
    return {};
}

