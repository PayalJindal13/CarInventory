module.exports = function modelSort(inventory){
    let Models = [];
    for (index =0; index< inventory.length; index++){
         Models.push(inventory[index].car_model)
    }
    return Models.sort();
}
        