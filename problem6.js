module.exports = function bmwAudi(inventory){
    let BMWAudis = [];
    for (index =0; index< inventory.length; index++){
         if (inventory[index].car_make === 'BMW' || inventory[index].car_make === 'Audi' ){
             BMWAudis.push(inventory[index])
         }
    }
    return BMWAudis;
}
        