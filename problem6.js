module.exports = function bmwAudi(inventory){
    if(inventory === undefined){
        return "Undefined array";
    }
    else if (inventory.length === 0){
        return "Empty array";
    }
    else{
        let BMWAudis = [];
        for (index =0; index< inventory.length; index++){
            if (inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi' ){
                BMWAudis.push(inventory[index])
            }
        }
        return BMWAudis;
    }
}
        